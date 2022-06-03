const config = {};
config.dev = {
    name: dev,
    passwordLength: 12,
    defoultlanguage: 'lt',
    languages: [ 'en', 'lt' ],
    db : {
        user: 'node_bata_user',
        pasword: 'skdi',
        database: 'batai-r5ghy'
    }
},

config.prod = {
    name: prod,
    passwordLength: 12,
    defoultlanguage: 'lt',
    languages: [ 'en', 'lt' ],
    db : {
        user: 'node_bata_user',
        pasword: 'skdijr568g',
        database: 'batai-r5ghy'
    }
}

const nodeEnv = process.env.NODE_ENV;  //ka patys priskiriame, parasome terminale
const env = nodeEnv ? nodeEnv : 'dev'; //kokia aplinka turesiu paleisti, jei priskiriame, tai ta aplinka ir paleidzia, jei mes ja turime, jei neranda, paleidzia dev.
const options = config[env] ? config[env] : config.dev; //kas slepiasi po ta aplinka, koks objektas, informacija.

console.log('kur dirba kodas?');
console.log('ka parasiau terminale', nodeEnv);
console.log('kokia aplinka turesiu paleisti', env);
console.log('kas yra prod objekte', options);