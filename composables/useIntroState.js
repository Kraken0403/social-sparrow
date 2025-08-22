// Shared intro state to trigger animations after the preloader
export const useIntroState = () => {
  const introKey = useState('introKey', () => 0)       // bump to trigger animations
  const isIntroDone = useState('isIntroDone', () => false)
  return { introKey, isIntroDone }
}
