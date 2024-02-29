import { useState, useEffect } from 'react'
import NextImage from 'next/image'
import { useTheme } from 'next-themes'
import clsx from 'clsx'
export function Logo() {
  const lightLogoSrc = '/static/images/logo-transparent-light-3-cropped.png'
  const darkLogoSrc = '/static/images/logo-transparent-dark-3-cropped.png'
  const [logoSrc, setLogoSrc] = useState(null)
  let { theme } = useTheme()

  useEffect(() => {
    if (theme !== null) {
      if (theme === 'system') {
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setLogoSrc(isDarkMode ? darkLogoSrc : lightLogoSrc)
      } else if (theme === 'dark') {
        setLogoSrc(darkLogoSrc)
      } else if (theme === 'light') {
        setLogoSrc(lightLogoSrc)
      }
    }
  }, [theme])

  return (
    <span
      className={clsx(
        'opacity-0 transition duration-500 ease-in-out', // Initial hidden state
        logoSrc && 'opacity-100'
      )}
    >
      {logoSrc && (
        <NextImage
          src={logoSrc}
          alt="Fiscal Coder logo"
          width={130}
          height={70}
          className="rounded-full"
          loader={({ src }) => src}
        />
      )}
    </span>
  )
}

export default Logo
