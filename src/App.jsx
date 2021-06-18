/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect} from 'react';
import './App.css'

import ChatListItem from './components/ChatListItem.jsx';
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'

//importações
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {

    const [chatList, setChatList] = useState
    ([
        {chatId:1, title: 'Goku', image: 'https://www.w3schools.com/w3images/avatar1.png'},
        {chatId:2, title: 'Saitama', image: 'https://www.w3schools.com/w3images/avatar2.png'},
        {chatId:3,  title: 'Genos', image: 'https://www.w3schools.com/w3images/avatar3.png'},
        {chatId:4,  title: 'Tatsumaki', image: 'https://www.w3schools.com/w3images/avatar4.png'},
    ]);

    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState(
        {
            id:123,
            avatar: 'https://www.w3schools.com/w3images/avatar1.png',
            name: 'Kakaroto'
        }
    );
    const [showNewChat, setShowNewChat] = useState(false)

  return (
    <div className="app-window">

        <div className="sidebar">
            <NewChat
                chatlist = {chatList}
                user={user}
                show = {showNewChat}
                setShow={setShowNewChat}
            />

            <header>
                <img src={user.avatar} alt="" className="header--avatar" />
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

            <div className="chatList">
                {chatList.map((item,key)=>(
                    <ChatListItem
                        key={key}
                        data={item}
                        active={activeChat.chatId === chatList[key].chatId}
                        onClick={()=>setActiveChat(chatList[key])}
                    />
                ))}
            </div>
        </div>


        <div className="contentarea" >
            {activeChat.chatId !== undefined &&             
                <ChatWindow
                    user ={user}
                />
            }
            {activeChat.chatId === undefined && <ChatIntro/>}
        </div>
    </div>
  );
}








