import { memo } from 'react'

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

//Buzzはメモ化した関数コンポーネント
// eslint-disable-next-line react/display-name
export const Buzz2 = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log(`Buzzが描画されました。 isBuzz : ${isBuzz}`)
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})
