import { NextPage } from 'next'
import { css } from '@emotion/react'
import Link from 'next/link'

import { Layout } from '../components/Layout'

const UseMemoPage: NextPage = () => {
  return (
    <Layout title='useMemoについて'>
      <div css={wrapper}>
        <h1 css={mainTitle}>useMemoによるメモ化について</h1>

        <main css={content}>
          <Link href='/'>
            <a>トップに戻る</a>
          </Link>
        </main>
      </div>
    </Layout>
  )
}
const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
`
const mainTitle = css`
  text-align: center;
`
const content = css`
  text-align: center;
`
export default UseMemoPage
