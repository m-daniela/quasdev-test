import {
    countries,
    leagues,
    messages,
    names,
    randomBool,
    randomDate,
    randomEntry, randomID, sites
} from "./data";

export class Message {
    // the message should have an associated user id
    constructor(id, userId) { 
        this.id = id;
        this.message = randomEntry(messages);
        this.site = randomEntry(sites);
        // this.user = randomEntry(names);
        this.user = userId;
        this.msgID = randomID(7);
        this.stamp = randomDate().getTime();
        this.comment = randomEntry(messages);
        this.error = randomBool( 0.1 ) ? [`{"error":"Forbidden","data":[],"serverTime":"${randomDate().toISOString()}"}`] : null;
    }
}

export class User {
    constructor(id) { 
        this.id = id;
        this.url = `https://picsum.photos/100/100?random=${ parseInt( ( Math.random() * 250 ) + 1 ) }`;
        this.country = randomEntry(countries);
        this.points = parseInt( Math.random() * 100000 );
        this.isGold = randomBool( 0.5 );
        this.stamp = randomDate().getTime();
        this.ranking = {
            league: randomEntry(leagues),
            level: parseInt( ( Math.random() * 100 ) + 1 )
        };
        this.name = names[ Math.floor( Math.random() * names.length ) ];
    }
}