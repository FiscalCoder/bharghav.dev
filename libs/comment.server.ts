import type { CommentConfigType } from '~/types/components'
import { commentConfig as DefaultCommentConfig } from '~/data/siteMetadata'
import { commentConfig } from '~/data/siteMetadata'
// This is a temporary workaround for the fact that the `mdx-bundler` & `esbuild`
// is not working with the NextJS's public variables.
export function getCommentConfigs(): CommentConfigType {
  return {
    ...DefaultCommentConfig,
    giscusConfig: {
      ...DefaultCommentConfig.giscusConfig,
      repo: commentConfig.giscusConfig.repo || null,
      repositoryId: commentConfig.giscusConfig.repositoryId || null,
      category: commentConfig.giscusConfig.category || null,
      categoryId: commentConfig.giscusConfig.categoryId || null,
    },
    utterancesConfig: {
      ...DefaultCommentConfig.utterancesConfig,
      repo: process.env.UTTERANCES_REPO || null,
    },
    disqus: {
      shortname: process.env.DISQUS_SHORTNAME || null,
    },
  }
}
