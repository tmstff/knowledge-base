import React from 'react';
import { useParams } from "react-router-dom";
import {members} from "../store/members.js";

export const MemberPage = () => {
  const params = useParams()

  const member = members.find(m => m.id === params.id)

  return (
    <>
      <h1>{member.name}</h1>
      <div>{member.age}</div>
      <div>{member.description}</div>
    </>
  )
}
