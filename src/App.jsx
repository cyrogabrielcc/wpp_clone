/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from 'react';
import './App.css'

import ChatListItem from './components/ChatListItem.jsx';

//importações
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {

    const [chatList, setChatList] = useState([{},{},{}])

  return (
    <div className="app-window">
        <div className="sidebar">
            <header>
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" className="header--avatar" />
                <div className="header--buttons">
                    <div className="header--btn">
                        <DonutLargeIcon style={{color:'#919191'}} />
                    </div>
                    <div className="header--btn">
                        <ChatIcon style={{color:'#919191'}}/>
                    </div>
                    <div className="header--btn">
                        <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                </div>
            </header>
            
            <div className="search">
                <div className="search--input">
                    <SearchIcon fontSize="small" style={{color:'#919191'}}/>
                    <input type="search" placeholder="escreva algo..." />
                </div>
            </div>

            <div className="chatlist">
                {chatList.map((item,key)=>{
                   <ChatListItem
                   key = {key}
                   />
                })}
            </div>
        </div>


        <div className="contentarea" >
            área de conteúdo
        </div>
    </div>
  );
}








