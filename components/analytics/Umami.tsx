import Script from 'next/script'
import { siteMetadata } from '~/data/siteMetadata'

export function UmamiScript() {
  return (
    <Script
      async
      src="https://umami-3ttkcq5z0-holischitz.vercel.app/script.js"
      data-website-id="b479f7bb-f9b5-43ec-92c5-9d5008bb6cf0"
    />
  )
}
