import React from 'react'
import styles from '../styles/AboutUs.module.css'
import MemberCards from '../components/MemberCards'

const AboutUsView = () => {
    return (
        <div className={styles.viewOuter}>
            <MemberCards/>
        </div>
    )
}

export default AboutUsView