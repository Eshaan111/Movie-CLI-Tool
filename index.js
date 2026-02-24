#!/usr/bin/env node
const dotenv = require('dotenv').config()
const command = require('commander')
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const program = new command();

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
        console.log('seraching for title')
    })
