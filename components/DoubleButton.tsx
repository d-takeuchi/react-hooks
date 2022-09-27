import { memo } from 'react'

type ButtonProps = {
  onClick: () => void
}

// eslint-disable-next-line react/display-name
export const DoubleButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log(`DoubleButtonが再描画されました`)
  return <button onClick={onClick}>DoubleButton</button>
})
