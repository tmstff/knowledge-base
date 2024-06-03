import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink> -&nbsp;
        <NavLink to="/services">Services</NavLink> -&nbsp;
        <NavLink to="/users">Users</NavLink> -&nbsp;
        <NavLink to="/typescript">TypeScript</NavLink> -&nbsp;
        <NavLink to="/dashboard">Dashboard</NavLink> -&nbsp;
        <NavLink to="/propdrilling">Prop Drilling</NavLink>
    </div>
  )
}

export default Navigation