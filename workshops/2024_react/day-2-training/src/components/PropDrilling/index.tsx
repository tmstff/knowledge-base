import { Dispatch, SetStateAction, useState } from "react"
import Element1 from "./components/Element1"

export type Data = {data:string, setData: Dispatch<SetStateAction<string>>}

const PropDrilling = () => {

  const [data, setData] = useState("Test")

  return (
    <div>
        <h2>PropDrilling</h2>
        {data}
        <Element1 data={{data:data, setData: setData}}/>
    </div>
  )
}

export default PropDrilling