import React, { Component }  from 'react';
import { render } from 'react-dom';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    //Find nuværende chatrum
    const chat = chats && chats[activeChat];

    //Hvis besked er læst
    const renderReadReceipts = (message, isMyMessage) => {
        chat.people.map((person, index) => person.last_read == message.id && (
            <div 
                key={`read_${index}`}
                className='read-receipt'
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundimage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    //Besked generering
    const renderMessages = () => {
        //Hent besked ID
        const keys = Object.keys(messages);

        //Render beskeder
        return keys.map((key, index) => {
            const message = messages[key];
            // Hvis der er beskeder, find seneste besked
            const lastMessageKey = index == 0 ? null : keys[index - 1];
            // Find ud af om besked er sendt fra bruger
            const isMyMessage = userName == message.sender.username;

            //Beskeder
            return (
                <div key={`msg_${index}`} style={{ width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                        <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                            {renderReadReceipts(message, isMyMessage)}
                        </div>
                    </div>
                </div>
            );
        })
    }

    if(!chat) return 'Loading...';

    //Chat feed struktur
    return (
        <div className="chat-feed">
            <div className="chat-title-container"> 
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
}

export default ChatFeed;