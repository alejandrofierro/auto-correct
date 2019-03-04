var wordSearch = require('./word');
var city = process.argv[2];

let result = wordSearch(city);
let correctCity = result.similarWord;
let percentage = result.percentage;

if(percentage === 100)
    console.log('City ' + city + ' is correct.');
else
    console.log('Did you mean ' + correctCity + '? This word has a ' + Math.floor(percentage,0) + '% of similarity' );




