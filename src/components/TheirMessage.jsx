import React, { Component }  from 'react';

const TheirMessage = ({ lastMessage, message}) => {
const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avatar"
                    style={{backgroundImage: `url(${message?.sender?.avatar})`}}
                />
            )}
            {
            // Check om billede eller tekst er sendt
            (message?.attachments?.length > 0)
                ? (
                    <img 
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                <div className= "message" style={{ float: 'left', backgroundColor: '#FF5746', color: 'white', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                    {message.text}
                </div>
                )
            }
        </div>
    )
}

export default TheirMessage;