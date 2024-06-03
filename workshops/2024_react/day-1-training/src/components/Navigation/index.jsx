import React from 'react'
import { NavItem } from './components/NavItem.jsx'
import { navigation } from '../../store/navigation.js'
import styles from '../../styles/Navigation.module.css'

export const Navigation = () => {

    const Items = navigation.map(
        (item) => {
            return (
                <NavItem key={"navItem-" + item.url} name={item.name} url={item.url} />
            )
        }
    )

  return (
    <div className={styles.navigation}>
        {Items}
    </div>
  )
}
