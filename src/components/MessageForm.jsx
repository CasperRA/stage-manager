import React, { Component }  from 'react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

// Sending af beskeder
const MessageForm = (props) => {
    const [value, setValue] = useState('')
    const { chatId, creds } = props;

    // Send funktion
    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });

        setValue('');
    }

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    // Inputfelt
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                placeholder="Skriv besked..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <img src="/src/components/img/upload_placeholder.png"></img>
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type="submit" class="send-button">Send</button>
        </form>
    )
}

export default MessageForm;