import Button from "./components/Button"
import Button2 from "./components/Button2"

const TypeScriptExercise = () => {

  const handleClick = () => console.log("click")

  return (

    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Button exercise</h3>
      <Button style={{
        backgroundColor: "gray",
        color: "white",
        fontSize: 1,
        padding: [10]
      }} text="Click me" action={handleClick}/>

      <Button2><div><b>Click My Button</b></div>{/*<div>♥</div>*/}</Button2>
    </div>
  )
}

export default TypeScriptExercise