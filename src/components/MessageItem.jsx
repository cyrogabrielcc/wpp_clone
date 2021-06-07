/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './MessageItem.css'

export default ({data}) => {
    return(
        <div 
            class="MessageLine"
            style={{
                justifyContent: 'flex-start'
            }}
        >
            <div className="MessageItem">
                <div className="MessageText">{data.body}</div>
                <div className="MessageDate">20:15</div>
            </div>
        </div>
    );
} 














