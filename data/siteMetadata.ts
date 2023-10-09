export let siteMetadata = {
  siteUrl: 'https://www.bharghav.dev',
  siteRepo: 'https://github.com/FiscalCoder/bharghav.dev',
  siteLogo: '/static/images/logo.jpeg',
  image: '/static/images/logo.jpeg',
  socialBanner: '/static/images/logo.jpeg',
  email: 'bharghavr42@gmail.com',
  github: 'https://github.com/FiscalCoder',
  x: 'https://x.com/byte_panache',
  linkedin: 'https://www.linkedin.com/in/bharghav-r/',
  locale: 'en-US',
  analyticsURL: 'https://analytics.bharghav.dev/share/IhCTvbh7XjTBxCLk/Personal',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: 'b479f7bb-f9b5-43ec-92c5-9d5008bb6cf0',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'FiscalCoder',
    linkedin: 'bharghav-r',
    x: 'byte_panache',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: 'FiscalCoder/bharghav.dev', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOKUxTiA', // process.env.GISCUS_REPOSITORY_ID
    category: 'General', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOKUxTiM4CZZ2n', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
