/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './MessageItem.css'

export default ({data}) => {
    return(
        <div class="MessageLine">
            <div className="MessageItem">
                <div className="messageText">{data.body}</div>
                <div className="MessageDate">20:15</div>
            </div>
        </div>
    );
} 














