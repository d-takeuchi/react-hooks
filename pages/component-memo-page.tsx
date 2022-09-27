import { NextPage } from 'next'
import { useState } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

import { Fizz } from '../components/Fizz'
import { Buzz } from '../components/Buzz'
import { Layout } from '../components/Layout'

const ComponentMemoPage: NextPage = () => {
  const [count, setCount] = useState(1)

  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`親ページが再レンダリングされました count : ${count}`)
  return (
    <Layout title='useCallbackについて'>
      <div css={wrapper}>
        <h1 css={mainTitle}>useCallbackによるメモ化について</h1>

        <main css={content}>
          <button
            onClick={() => {
              setCount((currentCount) => currentCount + 1)
            }}
          >
            +1
          </button>
          <p>{`現在のカウント : ${count}`}</p>
          <p>
            <Fizz isFizz={isFizz} />
            <Buzz isBuzz={isBuzz} />
          </p>
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
export default ComponentMemoPage
