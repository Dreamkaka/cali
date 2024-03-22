'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>只是一個普普通通的學生
      <span className="font-mono">/&gt;</span>
    </span>
  )
}




export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />
        <span className="block h-2" />
        
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          這裏是幻夢曉寒kaka,一個普普通通的學生，
          正在學習JavaScript和python以及unity相關的東西，
          平時喜歡寫一些對自己方便的小東西，也偶爾寫點文章分享我的心得（真的要寫發電文章嗎）
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/Dreamkaka3"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://space.bilibili.com/516951032"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github.com/Dreamkaka3"
          aria-label="我的 GitHub"
          platform="github"
        />

        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:457970652@qq.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
