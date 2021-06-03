/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'


import SearchIcon from '@material-ui/icons/Search';
import AttachFiletIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

export default() => {

    const handleEmojiClick = () => {
        
    }


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


        <div className="chatWindow--body">
        </div>

        <div className="chatWindow--emojiarea">
            <EmojiPicker
                onEmojiClick = {handleEmojiClick}
                disableSearchBar
                disableSkinTonePicker
            />
        </div>

        <div className="chatWindow--footer">
            <div className="chatWindow--pre">
                <div className="chatWindow--btn">
                    <CloseIcon style={{color:'#919191'}}/>
                </div>

                <div className="chatWindow--btn">
                    <InsertEmoticonIcon style={{color:'#919191'}}/>
                
                </div>
            </div>
            

            <div className="chatWindow--inputarea">
                <input type="text" 
                    className="chatWindow--input" 
                    placeholder="Digite uma mensagem"/>
                </div>
                    
                <div className="chatWindow--pos">
                    <div className="chatWindow--btn">
                        <SendIcon style={{color:'#919191'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}














