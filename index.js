#!/usr/bin/env node
const dotenv = require('dotenv').config()
const { Command } = require('commander')
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_RAT = process.env.TMDB_RAT;
const program = new Command();

console.log('Hi from CLI')

program
    .name('Movie-CLI')
    .description('A CLI TO GET MOVIES FROM APIs')
    .version('1.0.0')

program.command('search')
    .description('Get Movie Details By Name')
    .argument('<title>', 'Title of the movie')
    .option('-y --year<number>', "release year")
    .action((title, options) => {
        console.log('seraching for', title)
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
        let api_options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TMDB_RAT}`
            }
        };

        fetch(url, api_options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error(err));
    })

program.parse()
