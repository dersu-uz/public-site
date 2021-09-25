import fs from 'fs'
import path from 'path'
import { isNotJunk } from 'junk'
import matter from 'gray-matter'
import markdownToHtml from './markdownToHtml'

/* global process */
const postsDirectory = path.join(process.cwd(), '_posts')

export async function getAllPosts(locale) {
  const slugs = getPostSlugs(locale)
  const posts = await slugs
    .map(slug => getPostBySlug(slug, locale))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPostSlugs(locale) {
  const postSlugs = fs
    .readdirSync(path.join(postsDirectory, locale))
    .filter(isNotJunk)
    .map(name => name.replace(/\.md$/, ''))
  return postSlugs
}

export async function getPostBySlug(slug, locale) {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const htmlContent = await markdownToHtml(content || '')

  return {
    slug: slug,
    meta: data,
    htmlContent,
  }
}
