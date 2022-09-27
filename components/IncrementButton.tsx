import { memo } from 'react'

type ButtonProps = {
  onClick: () => void
}

// eslint-disable-next-line react/display-name
export const IncrementButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log(`IncrementButtonが再描画されました`)
  return <button onClick={onClick}>IncrementButton</button>
})
