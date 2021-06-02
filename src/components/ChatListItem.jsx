/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './ChatListItem.css'
export default ({onClick, active}) => {
    return (
        <div className={`chatListItem ${active? 'active' : '' } `} onClick={onClick}>
            <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                <div className="chatListItem--lines">
                    <div className="chatListItem--line">
                        <div className="chatListItem--name">Cyro Gabriel</div>
                        <div className="chatListItem--date">04:00</div>
                    </div>
                    <div className="chatListItem--line">
                        <div className="chatListItem--lastMsg">
                            <p>​uma curiosidade para quem ainda não sabe, o WhatsApp originlal na sua versão web foi escrito em React</p>
                       </div>
                    </div>
            </div>
        </div>
    )
}
