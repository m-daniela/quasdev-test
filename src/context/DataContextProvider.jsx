import React, { createContext, useContext } from "react";
import { getRandomData } from "../utils/data";


/**
 * Data context provider
 * Provides the data so it won't be
 * passed through props at each level
 */
const DataContext = createContext(null);

export const useDataContext = () => {
    return useContext(DataContext);
};

const DataContextProvider = ({children}) => {
    const {users, messages} = getRandomData();

    const getUserById = (userId) => {
        return users.filter(user => user.id === userId)[0];
    };

    const getMessageById = (messageId) => {
        return messages.filter(message => message.id === messageId)[0];
    };

    return (
        <DataContext.Provider value={{users, messages, getUserById, getMessageById}}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
