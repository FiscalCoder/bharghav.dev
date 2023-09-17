import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ProfileCardInfo } from './ProfileInfo'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'

export function ProfileCard() {
  const { t } = useTranslation('common')
  const cardRef = useRef(null)
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const imageUrls = [
    '/static/images/logo.jpeg',
    '/static/images/carousel_pic_1.jpg',
    '/static/images/carousel_pic_2.jpg',
    '/static/images/carousel_pic_3.jpg',
    '/static/images/carousel_pic_4.jpg',
  ]

  useEffect(() => {
    const card = cardRef.current

    const handleMouseEnter = () => {
      if (!card) return
      setIsZoomed(true)
    }

    const handleMouseMove = (e) => {
      if (!card || !isZoomed) return

      const { width, height, left, top } = card.getBoundingClientRect()
      const { clientX, clientY } = e
      const centerX = width / 2
      const centerY = height / 2
      const mouseX = clientX - left - centerX
      const mouseY = clientY - top - centerY

      // Adjust the rotation calculation based on mouseY and mouseX
      const rotateX = (mouseY / centerY) * 15
      const rotateY = (mouseX / centerX) * 15

      card.style.transform = `scale(1.2) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      if (!card) return
      setIsZoomed(false)
      card.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)'
    }

    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    const imageChangeInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
    }, 2000)

    return () => {
      clearInterval(imageChangeInterval)
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isZoomed, imageUrls.length])

  return (
    <div className={`z-10 mb-8 profile-card ${isZoomed ? 'zoomed' : ''}`} ref={cardRef}>
      <div className="flex flex-col overflow-hidden xl:rounded-lg bg-white shadow-demure dark:bg-dark dark:shadow-mondegreen outline outline-1 outline-gray-100 dark:outline-gray-600">
        <Image
          src={imageUrls[imageIndex]}
          alt={t('avatar_description')}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 16%',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '17/11',
          }}
          priority
        />
        <SpotifyNowPlaying />
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  )
}
