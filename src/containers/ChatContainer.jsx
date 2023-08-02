import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/chatCompountents/ChatFeed'
import LoginForm from '../components/chatCompountents/LoginForm'
import './chatContainer.css'

const projectID = 'eab1700f-38c8-4ead-a293-a7f76eca4950';
const ChatContainer = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
        
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  )
}

export default ChatContainer;
