import React, { useState } from 'react'
import styles from '../../../styles/AboutUs.module.css'
import { Link } from 'react-router-dom'

const MemberCard = ({ name, age, id }) => {
    const url = `/about-us/${id}`

    const [active, setActive] = useState(false);

    return (<>
        <Link to={url}>
            <div className={styles.memberCard}>
                <div className={styles.cardBody}>{name}, {age}</div>
            </div>
        </Link>
        <button onClick={() => setActive(!active)} style={active ? {backgroundColor:'green'} : {backgroundColor:'lightgreen'}}>A</button>
    </>
    )
}

export default MemberCard