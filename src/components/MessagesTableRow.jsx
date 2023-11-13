import React, { useState, useMemo } from "react";
import { displayDate } from "../utils/data";
import UserCard from "./UserCard";
import MessageCard from "./MessageCard";
import { useDataContext } from "../context/DataContextProvider";
import HtmlTableCell from "./HtmlTableCell";


/**
 * Messages Table Row
 * Displays the required data in a row
 * When the row is clicked, more information about 
 * the user and the message is displayed and the 
 * row is highlighted.
 * When the row or the cards are clicked, the 
 * information is hidden.
 */
const MessagesTableRow = ({message}) => {
    const {getUserById} = useDataContext();

    // cache the user
    const user = useMemo(() => getUserById(message.user), [message, getUserById]);

    const [showData, setShowData] = useState(false);

    const toggleShowData = () => {
        setShowData(!showData);
    };

    return (
        <>
            <tr id={message.id} onClick={toggleShowData} className={showData ? "selected" : ""}>
                <td>{displayDate(message.stamp)}</td>
                <td>{message.site}</td>
                <td>{user.name}</td>
                <td>{message.user}</td>
                <td>{user.ranking.level}</td>
                <HtmlTableCell htmlString={message.message}/>
                <HtmlTableCell htmlString={message.comment}/>
                <td><code>{message.error}</code></td>
            </tr>
            {
                showData &&
                <tr onClick={toggleShowData}>
                    <td colSpan={8}>
                        <div className="display-data">
                            <UserCard user={user} />
                            <MessageCard message={message} />
                        </div>
                    </td>
                </tr>
            }
        </>
    );
};

export default MessagesTableRow;
