import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ChatButton = ({msgId, chat, onButtonClick}) => {
    return(
        <input
            type="submit"
            name={msgId}
            value={chat}
            className="btn btn-primary"
            onClick={onButtonClick}
        />
    );
};

ChatButton.propTypes = {
    chat: PropTypes.string.isRequired
};

export default ChatButton;