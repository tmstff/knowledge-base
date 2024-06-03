import { useContext } from "react"
import { ThemeContext } from "../../../layout/MainLayout"

type Button2Type= {
    children: React.ReactElement | React.ReactElement[]
}

const Button2 = ({children}:Button2Type) => {

  const theme = useContext(ThemeContext);

  const style = theme == "light" ?
    {backgroundColor: "lightgray", color: "black"} :
    {backgroundColor: `gray`, color: "white"};

  return (
    <button style={style}>{children}</button>
  )
}

export default Button2