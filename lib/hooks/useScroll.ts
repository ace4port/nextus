import { useState, useEffect } from 'react'
// @ts-ignore
import { default as throttle } from 'lodash.throttle'

export default function useScroll() {
  const [progress, setProgress] = useState(0)

  const handleScroll = throttle(() => {
    const bodyHeight =
      document.body.clientHeight - document.documentElement.clientHeight
    const scrollPosition = window.scrollY

    setProgress(scrollPosition / bodyHeight)
  }, 100)

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { progress, scrollToTop }
}
