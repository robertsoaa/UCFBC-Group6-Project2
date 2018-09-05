
// var express = require('express');
// var app = express();
var models = require('../models');
// console.log(models);

module.exports = { seeddb: models.inventory.bulkCreate([
    {
        genre: 'Rock',
        artist: 'Bloc Party',
        album: 'Intimacy',
        price: '10.00',
    },
    {
        genre: 'Rock',
        artist: 'Rage Against the Machine',
        album: 'The Battle of Los Angeles',
        price: '9.99',
    },
    {
        genre: 'Rock',
        artist: 'Foo Fighters',
        album: 'Greatest Hits',
        price: '11.99',
    },
    {
        genre: 'Rock',
        artist: 'Nirvana',
        album: 'Nevermind',
        price: '9.99',
    },
    {
        genre: 'Rock',
        artist: 'Queens of the Stone Age',
        album: 'Songs for the Deaf',
        price: '12.99',
    },
    {
        genre: 'HipHop',
        artist: '2Pac',
        album: 'Greatest Hits',
        price: '12.99',
    },
    {
        genre: 'HipHop',
        artist: 'JAY-Z',
        album: 'The Blueprint',
        price: '9.99',
    },
    {
        genre: 'HipHop',
        artist: 'Outkast',
        album: 'Stankonia',
        price: '9.99',
    },
    {
        genre: 'HipHop',
        artist: 'Childish Gambino',
        album: 'Awaken, My Love!',
        price: '9.99',
    },
    {
        genre: 'HipHop',
        artist: 'Eminem',
        album: 'The Marshall Mathers LP',
        price: '9.99',
    },
    {
        genre: 'Pop',
        artist: 'Taylor Swift',
        album: '1989',
        price: '10.99',
    },
    {
        genre: 'Pop',
        artist: 'The Black Eyed Peas',
        album: 'The E.N.D.',
        price: '9.99',
    },
    {
        genre: 'Pop',
        artist: 'Justin Bieber',
        album: 'Purpose',
        price: '11.99',
    },
    {
        genre: 'Pop',
        artist: 'Bruno Mars',
        album: 'Unorthodox Jukebox',
        price: '10.99',
    },
    {
        genre: 'Pop',
        artist: 'Adele',
        album: '25',
        price: '10.99',
    },
    {
        genre: 'Country',
        artist: 'Luke Bryan',
        album: 'Crash My Party',
        price: '9.99',
    },
    {
        genre: 'Country',
        artist: 'Carrie Underwood',
        album: 'Cry Pretty',
        price: '11.99',
    },
    {
        genre: 'Country',
        artist: 'Zac Brown Band',
        album: 'The Foundation',
        price: '11.99',
    },
    {
        genre: 'Country',
        artist: 'Florida Georgia Line',
        album: "Here's to the Good Times",
        price: '7.99',
    },
    {
        genre: 'Country',
        artist: 'The Lumineers',
        album: 'The Lumineers',
        price: '9.99',
    }
])};