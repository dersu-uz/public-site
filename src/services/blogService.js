import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { isNotJunk } from 'junk'
import { compareDesc, format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

import { BASE_DOMAIN_URL } from '@/constants/settings'
import markdownToHtml from '@/utils/markdownToHtml'

/* global process, Promise */

const CONTENT_POSTS_PATH = path.join(process.cwd(), '_posts')
const PUBLIC_PATH = path.join(process.cwd(), 'public')

export async function getPostBySlug(slug, locale) {
  const { data, content } = _readPostBySlug(slug, locale)
  const post = await _preparePost(slug, locale, data, content)
  return post
}

export function getAllPostSlugs(locale) {
  const postSlugs = fs
    .readdirSync(path.join(CONTENT_POSTS_PATH, locale))
    .filter(isNotJunk)
    .filter(f => f !== '.gitkeep')
    .map(name => name.replace(/\.md$/, ''))
  return postSlugs
}

export async function getLatestPosts(locale, limit = 10) {
  const posts = await Promise.all(
    getAllPostSlugs(locale)
      .map(slug => _readPostBySlug(slug, locale))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        compareDesc(parseISO(post1.data.date), parseISO(post2.data.date))
      )
      .slice(0, limit)
      .map(async post => {
        return await _preparePost(
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

function _readPostBySlug(slug, locale) {
  const fullPath = path.join(CONTENT_POSTS_PATH, locale, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return {
    slug,
    locale,
    ...matter(fileContents),
  }
}

async function _preparePost(slug, locale, data, content) {
  const imagesPath = `/images/posts/${slug}`
  const dateFormatted = format(parseISO(data.date), 'PP', { locale: es })
  const htmlContent = await markdownToHtml(content)

  const coverImageUrl = `${imagesPath}/cover.jpg`
  const webpCoverImageUrl = `${imagesPath}/cover.webp`
  const featuredImageUrl = `${imagesPath}/featured.jpg`
  const webpFeaturedImageUrl = `${imagesPath}/featured.webp`

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
    coverImageUrl: fs.existsSync(path.join(PUBLIC_PATH, coverImageUrl))
      ? coverImageUrl
      : null,
    webpCoverImageUrl: fs.existsSync(path.join(PUBLIC_PATH, webpCoverImageUrl))
      ? webpCoverImageUrl
      : null,
    featuredImageUrl: fs.existsSync(path.join(PUBLIC_PATH, featuredImageUrl))
      ? featuredImageUrl
      : null,
    webpFeaturedImageUrl: fs.existsSync(
      path.join(PUBLIC_PATH, webpFeaturedImageUrl)
    )
      ? webpFeaturedImageUrl
      : null,
    content,
    htmlContent,
  }
}
