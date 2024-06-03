import React from 'react'
import { members } from '../../store/members'
import MemberCard from './components/MemberCard'

const MemberCards = () => {

    const MemberList = members.map(
        (member) => {
            return (
                <MemberCard key={"member-" + member.id} id={member.id} name={member.name} age={member.age} />
            )
        }
    )

    return (
        <>
            {MemberList}
        </>
    )
}

export default MemberCards