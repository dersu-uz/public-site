import path from 'path'
import fs from 'fs'
import { Feed } from 'feed'

import { BASE_DOMAIN_URL } from '@/constants/settings'
import { getLatestPosts } from '@/services/blogService'

/* global process */

const FEED_FOLDER = 'feed'
const RSS_FEEDS_PATH = path.join(process.cwd(), 'public', FEED_FOLDER)

export async function generateRSSFeed(locale) {
  const posts = await getLatestPosts(locale, 100)
  const date = new Date()
  const author = {
    name: 'Dersu.uz',
    link: 'https://dersu.uz',
  }

  const feed = new Feed({
    title: 'Dersu.uz Blog',
    description: '',
    id: `${BASE_DOMAIN_URL}/`,
    link: `${BASE_DOMAIN_URL}/`,
    language: locale,
    image: `${BASE_DOMAIN_URL}/logo.png`,
    favicon: `${BASE_DOMAIN_URL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Dersu.uz`,
    updated: date,
    feedLinks: {
      rss2: `${BASE_DOMAIN_URL}/${FEED_FOLDER}/${locale}/feed.xml`,
      json: `${BASE_DOMAIN_URL}/${FEED_FOLDER}/${locale}/feed.json`,
      atom: `${BASE_DOMAIN_URL}/${FEED_FOLDER}/${locale}/atom.xml`,
    },
    author,
  })

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: post.url,
      link: post.url,
      description: post.subtitle,
      content: post.htmlContent,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    })
  })

  // Write the RSS output to a public folder
  fs.writeFileSync(path.join(RSS_FEEDS_PATH, locale, 'feed.xml'), feed.rss2())
  fs.writeFileSync(path.join(RSS_FEEDS_PATH, locale, 'feed.json'), feed.json1())
  fs.writeFileSync(path.join(RSS_FEEDS_PATH, locale, 'atom.xml'), feed.atom1())
}
