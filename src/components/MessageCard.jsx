import React from "react";
import { displayDate } from "../utils/data";

/**
 * Message Card
 * Displays the message information
 * @param {Message} message 
 * @returns 
 */
const MessageCard = ({message}) => {
    console.log(message);
    return (
        <div className="card message-card">
            <p><span>#{message.msgID}</span> on /{message.site}/, {displayDate(message.stamp)}</p>
            <p><em>{message.message}</em></p>
            <p>Comment:</p>
            <p>{message.comment}</p>
            {
                message.error &&
                <>
                    <p>Some errors have occurred:</p>
                    <code>
                        {message.error[0]}
                    </code>
                </>
            }
        </div>
    );
};

export default MessageCard;
