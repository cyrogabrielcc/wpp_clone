/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default ({user, chatlist, show, setShow}) => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar1.png', name: 'Cyro'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Cyroc'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar3.png', name: 'Cyrilo'},
        {id: 123, avatar: 'https://www.w3schools.com/w3images/avatar4.png', name: 'Cyrio'}
    ]);

    const handleClose = () => {setShow(false)}

    return (
        <div className="newChat" style = {{left: show? 0 : -415}}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#fff'}}/>
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {
                    list.map((item, key)=>(
                        <div className="newChat--item" key={key}>
                            <img className="newChat--itemavatar" src={item.avatar} alt="" />
                            <div className="newChat--itemname">{item.name}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}