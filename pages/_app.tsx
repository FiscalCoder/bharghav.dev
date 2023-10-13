import { appWithTranslation } from 'next-i18next'

import 'css/tailwind.css'
import 'css/twemoji.css'
import 'css/resume.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Analytics } from '~/components/analytics'
import { LayoutWrapper } from '~/components/LayoutWrapper'

function App({ Component, pageProps }) {
  return (
    // @ts-ignore
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/static/favicons/icon-192x192.png"></link>
        <meta name="theme-color" content="#000000" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
