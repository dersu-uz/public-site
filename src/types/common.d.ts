import { COLOR_SCHEMES } from '@/constants/theme'

type BlogPost = {
  slug: string
  url: string
  locale: LocaleShortCode
  title: string
  subtitle: string
  tag: string
  author: string
  date: Date
  dateFormatted: string
  colorScheme: keyof typeof COLOR_SCHEMES
  coverImageUrl: string
  webpCoverImageUrl: string
  featuredImageUrl: string
  webpFeaturedImageUrl: string
  content: string
  htmlContent: string
}
