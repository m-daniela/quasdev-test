import React from "react";
import { displayDate } from "../utils/data";


/**
 * User Card
 * Displays the user information
 * @param {User} user 
 * @returns 
 */
const UserCard = ({user}) => {
    return (
        <div className={`card user-card ${user.isGold && "golden"}`}>
            <img src={user.url} alt="avatar"/>
            <div className="user-info">
                <h3>{user.name} [{user.country}]</h3>
                <p></p>
                <p>Pts: {user.points}</p>
                <p>Rank: {user.ranking.level}/{user.ranking.league}</p>
            </div>
            <span><em>Member since: {displayDate(user.stamp)}</em></span>
        </div>
    );
};

export default UserCard;
