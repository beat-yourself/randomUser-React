import React from 'react'

export default function RandomUser(props) {
    return (
        <div className="user-details">

            <div className="image-border">
                <img 
                    src={props.data.randomUser.picture.large}
                    alt="random user"
                    className="random-user-photo"
                />
            </div>

            <p className="intro-text">{props.data.text}</p> 
            <p className="intro-answer">{props.data.answer}</p>

            <div className="logos">
                <button name="Name" onMouseOver={props.handleHover}>Name</button>
                <button name="Email" onMouseOver={props.handleHover}>Email</button>
                <button name="Age" onMouseOver={props.handleHover}>Age</button>
                <button name="Address" onMouseOver={props.handleHover}>Address</button>
                <button name="Phone" onMouseOver={props.handleHover}>Phone</button>
                <button name="Password" onMouseOver={props.handleHover}>Password</button>
            </div>

            <button name="randomUser" onClick={props.handleClick}>{props.data.randomButtonText}</button>
        </div>
    )
}



