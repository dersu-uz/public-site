import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { isNotJunk } from 'junk'
import { compareDesc, format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import { Feed } from 'feed'

import { BASE_DOMAIN_URL } from '@/constants/settings'
import markdownToHtml from '@/utils/markdownToHtml'

/* global process, Promise */

const CONTENT_POSTS_PATH = path.join(process.cwd(), '_posts')

export async function getPostBySlug(slug, locale) {
  const { data, content } = readPostBySlug(slug, locale)
  const post = await preparePost(slug, locale, data, content)
  return post
}

export function getAllPostSlugs(locale) {
  const postSlugs = fs
    .readdirSync(path.join(CONTENT_POSTS_PATH, locale))
    .filter(isNotJunk)
    .map(name => name.replace(/\.md$/, ''))
  return postSlugs
}

export async function getLatestPosts(locale, limit = 10) {
  const posts = await Promise.all(
    getAllPostSlugs(locale)
      .map(slug => readPostBySlug(slug, locale))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        compareDesc(parseISO(post1.data.date), parseISO(post2.data.date))
      )
      .slice(0, limit)
      .map(async post => {
        return await preparePost(
          post.slug,
          post.locale,
          post.data,
          post.content
        )
      })
  )
  return posts
}

// private

function readPostBySlug(slug, locale) {
  const fullPath = path.join(CONTENT_POSTS_PATH, locale, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return {
    slug,
    locale,
    ...matter(fileContents),
  }
}

async function preparePost(slug, locale, data, content) {
  const imagesPath = `/images/posts/${slug}`
  const dateFormatted = format(parseISO(data.date), 'PP', { locale: es })
  const htmlContent = await markdownToHtml(content)
  return {
    slug: slug,
    url: `${BASE_DOMAIN_URL}/${locale}/blog/${slug}/`,
    locale,
    title: data.title,
    subtitle: data.subtitle,
    tag: data.tag,
    date: data.date,
    dateFormatted,
    colorScheme: data.color_scheme || null,
    coverImageUrl: `${imagesPath}/cover.jpg`,
    webpCoverImageUrl: `${imagesPath}/cover.webp`,
    featuredImageUrl: `${imagesPath}/featured.jpg`,
    webpFeaturedImageUrl: `${imagesPath}/featured.webp`,
    content,
    htmlContent,
  }
}
