import { NextPage } from 'next'
import { useState } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

import { Fizz } from '../components/Fizz'
import { Buzz2 } from '../components/Buzz2'
import { Layout } from '../components/Layout'

const memoProblemPage: NextPage = () => {
  const [count, setCount] = useState(1)

  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz : ${isBuzz}`)
  }
  console.log(`親ページが再レンダリングされました count : ${count}`)
  return (
    <Layout title='メモ化したコンポーネントにオブジェクトを渡したときの挙動'>
      <div css={wrapper}>
        <h1 css={mainTitle}>
          メモ化したコンポ―ネントにpropsにオブジェクト（関数）を渡すとメメモしたコンポーネントでも再描画が発生する
        </h1>

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
            <Buzz2 isBuzz={isBuzz} onClick={onBuzzClick} />
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
export default memoProblemPage
