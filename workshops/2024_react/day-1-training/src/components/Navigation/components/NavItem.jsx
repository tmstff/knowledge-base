import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../../../styles/Navigation.module.css'

export const NavItem = ({ name, url }) => {
    const active = `${styles.active} ${styles.navItem}`
    const inactive = `${styles.inactive} ${styles.navItem}`
    return (
        <NavLink to={url} className={({ isActive }) => isActive ? active : inactive}><div>{name}</div></NavLink>
    )
}
