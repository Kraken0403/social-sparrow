import nodemailer from 'nodemailer'
import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const name = body.name
  const email = body.email
  const phone = body.phone
  const message = body.message || ''

  if (!name || !email || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const html =
    '<h2>New Lead</h2>' +
    '<p><strong>Name:</strong> ' + name + '</p>' +
    '<p><strong>Email:</strong> ' + email + '</p>' +
    '<p><strong>Phone:</strong> ' + phone + '</p>' +
    '<p><strong>Message:</strong></p>' +
    '<p>' + message + '</p>'

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_TO,
    subject: 'New Contact Form Submission',
    html: html,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (err) {
    console.error(err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})
