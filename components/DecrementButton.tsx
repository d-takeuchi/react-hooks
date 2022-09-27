type ButtonProps = {
  onClick: () => void
}

export const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log(`DecrementButtonが再描画されました`)
  return <button onClick={onClick}>Decrement</button>
}
