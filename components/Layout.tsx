import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from './Header'

interface Props {
  title: string
  children: ReactNode
}
export const Layout = (props: Props) => {
  const { title, children } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  )
}
