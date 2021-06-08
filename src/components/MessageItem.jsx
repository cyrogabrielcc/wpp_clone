/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import './MessageItem.css'

export default ({data, user}) => {
    return(
        <div 
            class="MessageLine"
            style={{
                justifyContent:  user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div className="MessageItem" style={{
                backgroundColor:  user.id === data.author ? '#d3fab5' : '#fff'
            }}>
                <div className="MessageText">{data.body}</div>
                <div className="MessageDate">20:15</div>
            </div>
        </div>
    );
} 














