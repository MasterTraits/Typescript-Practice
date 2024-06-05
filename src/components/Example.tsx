const Example = () => {
  type sample = {
    id: number,
    word: string
  }

  let ForSample: sample = {
    id: 1,
    word: "hello"
  }

  

  return (
    <div>{ForSample.word}</div>
  )
}

export default Example