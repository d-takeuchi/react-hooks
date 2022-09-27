import { css } from '@emotion/react'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title='トップページ'>
      <main css={wrapper}>
        <p>Reactのhooksについて、色々と気になる挙動を試してみるサイトです</p>
      </main>
    </Layout>
  )
}
const wrapper = css`
  max-width: 1100px;
  margin: 0 auto;
`

export default Home
