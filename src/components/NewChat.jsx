/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default () => {
    return (
        <div className="newChat">
            <div className="newChat--head">
                <div className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#919191'}}/>
                </div>
                <div className="NewChat--headTitle">
                    
                </div>
            </div>
            <div className="newChat--list">

            </div>
        </div>
    )
}