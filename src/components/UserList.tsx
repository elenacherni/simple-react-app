import React from 'react'
import { api, User } from '../api'

const UserList = ({ users, status }: { users: User[], status: number }) => {
    return (
        <div>
            {status === api.DATA_READY ?
                <ul className="user-list">
                    {users && users.length ? users.map(user =>
                        <li key={user.id}>
                            {user.name}: <span className={user.status}>{user.status}</span>
                        </li>)
                        : null}
                </ul>
                : <div className="data-status"> {
                    status === api.DATA_LOADING ?
                        "Data is loading..."
                        :
                        status === api.DATA_ERROR ?
                            "An error occurred while loading the information"
                            : null}
                </div>
            }
        </div>
    )
}

export default UserList
