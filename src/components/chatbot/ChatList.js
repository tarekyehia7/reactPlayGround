import React, { PropTypes } from 'react';
import ChatListRow from './ChatListRow';

const ChatList = ({chats, chatHistory, onButtonClick}) => {
    return(
        <table className="table">
            <tbody>
                {chats.map(chat =>
                    <ChatListRow key={chat.id} chat={chat} onButtonClick={onButtonClick} />
                )}
            </tbody>
        </table>
    );
};

ChatList.propTypes = {
    chats: PropTypes.array.isRequired
};

export default ChatList;