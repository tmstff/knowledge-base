import { useEffect, useState } from "react"

const Effect = () => {

  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log("effect runs")
    const interval = setInterval(
      () => setNumber(prev => prev + 1),
      500
    )

    return ()=> {
      clearInterval(interval)
      console.log("cleanup")
    }
  }, [])

  /*useEffect(() => {
    console.log("effect runs")
    return () => console.log("cleanup")
  }, [number]);*/

  return (
    <>
      <h2>UseEffect</h2>
      <h4>{number}</h4>
      <button onClick={()=>setNumber(prev => prev + 1)}>inc</button>
    </>
  )
}

export default Effect