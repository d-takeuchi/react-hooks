type FizzProps = {
  isFizz: boolean
}

//Fizzは通常の関数コンポーネント
export const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが描画されました。  isFizz: ${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}
