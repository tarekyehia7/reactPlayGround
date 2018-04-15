import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ChatButton from './ChatButton';

const ChatListRow = ({chat, chatHistory, showPrevResponses, onButtonClick}) => {

    return(
        <tr>
            <td>
                {chat.message}
            </td>
            <td>
            {
                chat.buttons.map(button =>
                <ChatButton key={button.key} chat={button.msg} msgId={button.id} onButtonClick={onButtonClick} />
                )}</td>
        </tr>
    );
};

ChatListRow.propTypes = {
    chat: PropTypes.object.isRequired
};

export default ChatListRow;