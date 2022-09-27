import { memo } from 'react'

type BuzzProps = {
  isBuzz: boolean
}

//Buzzはメモ化した関数コンポーネント
// eslint-disable-next-line react/display-name
export const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props
  console.log(`Buzzが描画されました。 isBuzz : ${isBuzz}`)
  return <span>{isBuzz ? 'Buzz' : ''}</span>
})
