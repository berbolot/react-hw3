

const Title = () => {

    function onClick() {
      alert('Hello world')
    }

  return (
    <div>
        <button onClick={onClick}>
            ENTER
        </button>
    </div>
  )
}

export default Title