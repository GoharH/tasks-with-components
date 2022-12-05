import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserCompo from './user-compo';
import './style.scss';

const UserCompoAPI = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, []) // eslint-disable-line

    const getUsers = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        }).then(res => { return res.json() }).then(data => {
            setUsers(data)
            console.log(data)
            //console.log(users[2])
            setLoading(false)
        })
    }

    return <div>
        {!loading ? <div>
            {users.length ? <div className="user-box">
                {users.map((item, index) => {
                    return <UserCompo key={index} item={item} />
                })}
            </div> : <p>There is no users</p>}

        </div> : <p className="loading">Loading a users</p>
        }
    </div>
}

export default UserCompoAPI

