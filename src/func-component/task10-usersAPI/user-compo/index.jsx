import React from "react";
import './style.scss';
import image from '../../../assets/images/user-icon.png';

const UserCompo = ({ item }) => {
    // props=> item {item}



    return <div className="user-box-item" >
        {item.img ? <span className="user-img" style={{ backgroundImage: `url(${item.img})` }}></span> : <span className="user-img" style={{ backgroundImage: `url(${image})` }}></span>}
        {/* <span className="user-img" style={{ backgroundImage: `url(${image})` }}></span> */}
        <div className="user-info">
            <p className="user-name">{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.address.city}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
        </div>
    </div>
}
export default UserCompo