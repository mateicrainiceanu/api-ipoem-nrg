const {Configuration, OpenAIApi} = require("openai");
var Scraper = require('images-scraper');
var WordPOS = require('wordpos');
const LanguageDetect = require('languagedetect')
const imageSearch = require('image-search-google');
require("dotenv").config()

const client = new imageSearch(process.env.G_SEARCH_ENGINE, process.env.G_API_KEY);

options = {page: 1}



const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

const configuration = new Configuration({
    organization:process.env.OAI_ORGANISATION,
    apiKey: process.env.OAI_API_KEY
});

const openai = new OpenAIApi(configuration);


const lngDet = new LanguageDetect()

const wordpos = new WordPOS();


module.exports = {google, configuration, openai, lngDet, wordpos, options, client}