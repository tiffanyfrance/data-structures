import { load } from 'cheerio'
const $ = load('<h2 class="title">Hello world</h2>')
 
$('h2.title').text('Hello there!')
$('h2').addClass('welcome')
 
$.html()