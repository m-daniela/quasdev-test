import React from "react";
import MessagesTableRow from "./MessagesTableRow";
import { useDataContext } from "../context/DataContextProvider";

/**
 * Messages Table
 * Displays all message information as a table
 */
const MessagesTable = () => {
    const {messages} = useDataContext();
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Site</th>
                    <th>Name</th>
                    <th>User ID</th>
                    <th>Ranking level</th>
                    <th>Message preview</th>
                    <th>Comment preview</th>
                    <th>Message errors</th>
                </tr>
            </thead>
            <tbody>
                {
                    messages.map(message => {
                        return <MessagesTableRow 
                            key={message.id}
                            message={message}
                        />;
                    })
                }
            </tbody>
        </table>
    );
};

export default MessagesTable;
