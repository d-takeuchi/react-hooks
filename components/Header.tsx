import { css } from '@emotion/react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header css={[header]}>
      <div css={wrapper}>
        <Link href='/'>
          <a css={logo}>React-Hooks</a>
        </Link>
        <nav>
          <ul css={nav}>
            <li>
              <Link href='/component-memo-page'>
                <a>コンポーネントのメモ化について</a>
              </Link>
            </li>

            <li>
              <Link href='/memo-problem-page'>
                <a>メモ化したコンポーネントにオブジェクトを渡したときの挙動</a>
              </Link>
            </li>
            <li>
              <Link href='/use-callback-page'>
                <a>useCallbackについて</a>
              </Link>
            </li>
            <li>
              <Link href='/use-memo-page'>
                <a>useMemoについて</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
const wrapper = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const header = css`
  background: black;
  color: white;
  padding: 20px 0;
`
const nav = css`
  display: flex;
  list-style: none;
  li {
    margin-right: 20px;
    font-size: 0.5rem;
  }
`
const logo = css`
  font-size: 3rem;
`
