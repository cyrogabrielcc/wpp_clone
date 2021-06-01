/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './ChatListItem.css'
export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
                <div className="chatListItem--lines">
                    <div className="chatListItem--line">
                        <div className="ChatListItem--name">Cyro Gabriel</div>
                        <div className="ChatListItem--date">04:00</div>
                    </div>
                    <div className="chatListItem--line">
                        <div className="ChatListItem--lastMsg">
                            <p>​Quem aqui da live que trabalhe com react/react native/node.js/typescript e/ou wordpress estou contratando</p>
                       </div>
                    </div>
            </div>
        </div>
    )
}
