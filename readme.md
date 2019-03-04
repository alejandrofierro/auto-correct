Auto Correct Words
============

Auto Correct Words. Give an incorrect word and get the most relevant word from the list of words.


## Usage
1. npm install
2. Usage in terminal
```
node app.js name_of_city
```
3. "Library Usage"
```
var word = require('./word')

var result = word(string);

/* result would be an object like
    {
        similarWord: word,
        percentage: percentageOfSimilarity
    }
*/
```
The search is based on the array contained in the listOfWords.js file
