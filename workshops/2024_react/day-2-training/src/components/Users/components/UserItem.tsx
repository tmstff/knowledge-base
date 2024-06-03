import { UserItemType } from '../../../types/UserTypes'
import './UserItem.css'

const UserItem = ({user}:{user:UserItemType}) => {
  return (
    <div className="user">{user.name}</div>
  )
}

export default UserItem