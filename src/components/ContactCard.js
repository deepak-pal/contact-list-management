import React from "react";

const CardContact = (props) => {
    const { name, email, id } = props.contact;
    return (
        <div className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"></i>
        </div>
    );

}
export default CardContact;