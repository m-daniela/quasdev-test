import { Message, User } from "./model";

export const names = ["Anna", "Benjamin", "Cartman", "Devon", "Eisa", "Filip", "Greg", "Haydyn", "Irvin", "Jacky", "Kyle", "Lee", "Markus", "Norrie", "Oscar", "Randy", "Quinn", "Stan", "Taylor", "Umma", "Vincent", "Wade Wilson", "Xin", "Zhong"],
    sites = [ "yhh", "jvl", "suv", "psp", "der", "usz" ],
    countries = [ "us", "ro", "jp", "eu", "fr", "md" ],
    leagues = [ "silver", "gold", "diamond", "legend"],
    messages = [
        "Discovering new ways of making you wait.",
        "Your time is very important to us. Please wait while we ignore you.",
        "Still faster than Windows update.",
        "We are not liable for any broken screens as a result of waiting.",
        "Bored of slow loading spinner?, buy more RAM!",
        "Kindly hold on until I finish a cup of coffee.",
        "We will be back in 1/0 minutes.",
        "Why don't you order a sandwich?",
        "Don't panic, Just count to infinite.",
        "Please wait, Your PC is not a superman!",
        "Counting backwards from Infinity",
        "Don't worry - a few bits tried to escape, but we caught them",
        "The server is powered by a lemon and two electrodes.",
        "We're testing your patience",
        "As if you had any other choice",
        "Follow the white rabbit",
        "It's not you. It's me.",
        "Creating time-loop inversion field",
        "Don't break your screen yet!<br/>I swear it's almost done.",
        "Unicorns are at the end of this road, I promise.",
        "Time flies when you're having fun.",
        "Get some coffee and come back in ten minutes..",
        "Convincing AI not to turn evil..",
        "Java developers never RIP. They just get Garbage Collected.",
        "Cracking military-grade encryption...",
        "BRB, working on my side project",
        "Chuck Norris once urinated in a semi truck's gas tank as a joke....that truck is now known as Optimus Prime.",
        "Chuck Norris doesn't wear a watch. HE decides what time it is.",
        "Mining some bitcoins...",
        "Downloading more RAM..",
        "Never let a computer know you're in a hurry.",
        "Deleting all your hidden porn...",
        "Still faster than Windows update",
        "Please wait while we serve other customers...",
        "Our premium plan is faster",
    ];
        
export function randomID( length ) {
    let result = "";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for ( let i = 0; i < length; ++i )
        result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
            
    return parseFloat(result);
}

export function randomDate() {
    const start = new Date( "10/10/2018 23:45" ), 
        end = new Date( "12/07/2022 00:10" );
    const diff = end.getTime() - start.getTime();
    const new_diff = diff * Math.random();
    return new Date( start.getTime() + new_diff );
}

export function randomBool( chance ) {
    return ( Math.random() < chance );
}

export function randomEntry( array ) {
    return array[ Math.floor( Math.random() * array.length ) ];
}

const randomNumber = (limit=10) => {
    return Math.floor(Math.random() * limit);
};


export const displayDate = (date) => {
    return new Date(date).toLocaleString();
};

/**
 * Get an array of users
 * @returns the users array
 */
const getRandomUsers = () => {
    const nrUsers = randomNumber();
    const users = [];
    for (let i = 0; i <= nrUsers; i++) {
        const userId = randomID(7);
        users.push(new User(userId));
    }
    return users;
};


/**
 * Create a number of random messages that are
 * associated to the given user
 * @param {number} userId 
 * @returns the messages array
 */
const getRandomMessages = (userId) => {
    const nrMessages = randomNumber(5);
    const messages = [];
    for (let i = 0; i <= nrMessages; i++) {
        const messageId = randomID(7);
        messages.push(new Message(messageId, userId));
    }
    return messages;
};


/**
 * Get a number of random users and associatd
 * messages
 * @returns 
 */
export const getRandomData = () => {
    const users = getRandomUsers();
    let messages = [];
    for (const user of users) {
        const userMessages = getRandomMessages(user.id);
        messages = [...messages, ...userMessages];
    }
    return {users, messages};
};