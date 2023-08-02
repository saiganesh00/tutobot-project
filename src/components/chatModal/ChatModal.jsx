import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './chatModal.scss'
import SearchIcon from '@mui/icons-material/Search';
import Friend from './Friend';
const ChatModal = ({ setModal }) => {
  return (
    <div className='chat-modal'>
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {setModal(false);}}>
                        X
                    </button>
                </div>
                <div className="">
                    <h4 style={{textAlign: 'center', color: 'black'}}>Clarity Chat</h4>
                </div>
                <div className="body">
                    <div className="body-left">
                        
                            <form action="">
                                <input type="text"  placeholder='Search'/>
                                <SearchIcon/>
                            </form>  
                        <div>
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            
                            <Friend />
                            
                        </div>
                    </div>
                    <div className="body-right">
                        <div id="chat-body">
                            
                        </div>
                        <form action="">
                            <input type="text" placeholder='Enter Text'/>
                            <label htmlFor=""><AttachFileIcon/></label>
                            <input type="file" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatModal
