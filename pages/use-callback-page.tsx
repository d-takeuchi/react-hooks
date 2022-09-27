import { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { css } from '@emotion/react'

import { DecrementButton } from '../components/DecrementButton'
import { DoubleButton } from '../components/DoubleButton'
import { IncrementButton } from '../components/IncrementButton'
import { Layout } from '../components/Layout'

const useCallbackPage: NextPage = () => {
  const [count, setCount] = useState(0)

  const decrement = () => setCount((currentCount) => currentCount - 1)
  const increment = () => setCount((currentCount) => currentCount + 1)
  //useCallbackをつかって、関数をメモ化
  const double = useCallback(() => {
    setCount((currentCount) => currentCount * 2)
  }, [])

  console.log(`親ページが再レンダリングされました count : ${count}`)
  return (
    <Layout title='useCallbackについて'>
      <div css={wrapper}>
        <h1 css={mainTitle}>useCallbackによるメモ化について</h1>

        <main css={content}>
          <p>Count : {count}</p>
          <DecrementButton onClick={decrement} />
          <IncrementButton onClick={increment} />
          <DoubleButton onClick={double} />
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
export default useCallbackPage
