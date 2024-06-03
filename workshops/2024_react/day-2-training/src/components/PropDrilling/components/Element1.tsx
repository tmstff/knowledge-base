import { Data } from ".."
import Element2 from "./Element2"

const Element1 = ({data}: {data: Data}) => {
  return (
    <div>Element1 <Element2 data={data}/></div>
  )
}

export default Element1