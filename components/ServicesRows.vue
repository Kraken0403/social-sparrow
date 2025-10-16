<template>
    <div class="w-full py-[80px] bg-[#457b9d]">
      <div class="max-w-[992px] mx-auto">
        <!-- Section heading -->
        <div class="pb-[80px] border-b-1 border-[#1a1a1a]">
          <h2 class="uppercase text-[62px] leading-[0.9] text-[#1a1a1a]">CHECK EM OUT!!!</h2>
        </div>
  
        <!-- Service rows -->
        <div
          v-for="(s, i) in services"
          :key="s.title"
          class="flex py-[80px] px-[30px] gap-[30px] justify-between"
          :class="i === services.length - 1 ? 'border-b-0' : 'border-b-1 border-[#1a1a1a]'"
        >
          <div class="w-[50%]">
            <h2 class="text-[32px] text-[#1a1a1a] uppercase">
              {{ number(i + 1) }}. {{ s.title }}
            </h2>
          </div>
          <div class="w-[50%]">
            <p class="text-[#1a1a1a] text-[22px]">
              {{ s.desc }}
            </p>
            <PressButton class="mt-[30px]" text="Contact Us" color="#5644ff" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import PressButton from '@/components/ui/PressButton.vue'
  
  const services = [
    {
      title: 'Social Media Management',
      desc:
        'We manage your brand’s social media from start to finish—strategy, posting, replying, and growing. Every platform is handled with a clear voice, consistent look, and a goal to build connection, not just numbers.',
    },
    {
      title: 'Content Creation',
      desc:
        'We create photos, videos, reels, stories, and captions that reflect your brand’s personality. Whether it’s a fun reel or an informative post, everything is planned to keep your audience engaged and wanting more.',
    },
    {
      title: 'Creative Campaign Designing',
      desc:
        'We design campaigns that aren’t just creative, but also smart. From ideation to execution, each campaign highlights what makes your brand different—and makes sure people remember it, scroll after scroll.',
    },
    {
      title: 'Feed Designing',
      desc:
        'Your social media feed is your first impression. We design it to look clean, aesthetic, and in line with your brand vibe—making sure every post fits in, stands out, and tells a bigger story.',
    },
    {
      title: 'Media Consultation',
      desc:
        'Choosing between online and offline media can be confusing. We help you pick what works best for your brand—whether it’s Instagram ads, radio, cinema, or billboards—based on your audience, goals, and budget.',
    },
    {
      title: 'Influencer Campaign',
      desc:
        'From micro to macro, we connect you with creators that fit your brand voice. We handle the briefing, coordination, and performance tracking—so you get real results, not just pretty pictures.',
    },
    {
      title: 'Creative Video Promotion',
      desc:
        'We plan and promote videos that entertain, inform, and sell—without sounding like a hard sell. Whether it’s a reel or a longer feature, the aim is always to keep your audience watching till the end.',
    },
    {
      title: 'B2B Services',
      desc:
        'For agencies that feel creatively stuck or overstretched—we offer support with fresh ideas, content, and campaign execution. Think of us as your behind-the-scenes partner that delivers without taking the spotlight.',
    },
    {
      title: 'Creative Collaborations',
      desc:
        'We bring two brands together for campaigns that increase awareness and double the impact. Every collaboration is planned to be meaningful, well-aligned, and beneficial for both audiences.',
    },
    {
      title: 'Social Media Poster',
      desc:
        'Creative images for Instagram, Facebook, and more. They highlight offers, updates, or messages while making your brand look fresh, clean, and eye-catching.',
    },
    {
      title: 'Logo Designing',
      desc:
        'A logo is your brand’s symbol. Simple, unique, and easy to remember. It builds identity and makes your business stand out.',
    },
    {
      title: 'Business Card',
      desc:
        'Shares your name, job, and contact details. A neat, smart card leaves a strong impression and shows you’re professional.',
    },
    {
      title: 'Letterhead',
      desc:
        'Used on official documents with your logo and contact info. It adds trust and keeps communication clean and branded.',
    },
    {
      title: 'Brochure / Flyer',
      desc:
        'Short and handy sheets to promote your service, offer, or product. They look neat, easy to read, and informative.',
    },
    {
      title: 'Magazine',
      desc:
        'Design that makes reading fun and attractive. Good layouts, colors, and photos help share stories in a stylish way.',
    },
    {
      title: 'Coupon / Voucher',
      desc:
        'Shows offers or deals clearly. Bright, simple, and easy to scan, so people want to redeem them right away.',
    },
    {
      title: 'Social Media Cover',
      desc:
        'Top banner on profiles like Facebook or LinkedIn. Shows your brand message or campaign in a clean, bold way.',
    },
    {
      title: 'Website Banner Design',
      desc:
        'Visuals at the top of a website. They highlight updates or offers and keep the site looking neat and attractive.',
    },
    {
      title: 'Product Packaging Curation',
      desc:
        'Wraps your product safely and looks great too. Helps it stand out, share key info, and feel premium.',
    },
    {
      title: 'Product Catalogue (A4) Curation',
      desc:
        'Shows products with pictures, prices, and info. Looks clean and easy to flip through. Works well online or printed.',
    },
    {
      title: 'Menu Card Curation',
      desc:
        'Lists food or drink options clearly. Simple to browse and matches the feel of your café or restaurant.',
    },
    {
      title: 'Print Standee / Banner Design',
      desc:
        'Used at shops or events to show offers or products. Bold design, short words, and large text catch attention quickly.',
    },
    {
      title: 'Hoarding Design',
      desc:
        'Big outdoor ads with clear visuals and short text. Easy to spot from far and great for brand promotion.',
    },
    {
      title: 'Company Profile',
      desc:
        'Tells your brand story, services, and strengths. Neatly designed to impress clients, partners, or investors at first glance.',
    },
  ]
  
  // helper to render 01–24
  const number = (n) => String(n).padStart(2, '0')
  </script>
  