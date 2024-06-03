import { Data } from ".."

const Element2 = ({ data }: { data: Data }) => {

  function handleChange(e: any) {
    e.preventDefault()
    data.setData(e.target.value)
  }

  return (
    <div>
      <div>Element2 ({data.data})</div>
      <form onChange={handleChange}>
        <input type="text" name="data" />
      </form>
    </div>
  )
}

export default Element2