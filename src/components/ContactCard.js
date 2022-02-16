import React from "react";
import user from "../images/user.png"

const CardContact = (props) => {
    const { name, email, id } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"></i>
        </div>
    );

}
export default CardContact;