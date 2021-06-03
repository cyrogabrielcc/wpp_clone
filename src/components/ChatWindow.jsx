/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './ChatWindow.css'


/* import DonutLargeIcon from '@material-ui/icons/DonutLarge';
    import ChatIcon from '@material-ui/icons/Chat';
    import MoreVertIcon from '@material-ui/icons/MoreVert';
    
 */
import SearchIcon from '@material-ui/icons/Search';
import AttachFiletIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default() => {
    return (
        <div className="chatWindow" >
            <div className="chatWindow--header">
                <div className="chatWindow--headerInfo">
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="chatWindow--avatar" />
                    <div className="chatWindow--name">Cyro Gabriel</div>
                </div>
            <div className="chatWindow--headerButtons">
                <div className="chatWindow--Btn">
                    <SearchIcon style={{color:'#919191'}}/>
                    <AttachFiletIcon style={{color:'#919191'}}/>
                    <MoreVertIcon style={{color:'#919191'}}/>
                </div>
            </div>

            </div>
            <div className="chatWindow--body"></div>
            <div className="chatWindow--footer"></div>
        </div>
    )
}














