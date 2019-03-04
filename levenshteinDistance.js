function getStringsSimilarity(string1, string2) {
  var longer = string1;
  var shorter = string2;

  string1.length < string2.length ? (longer = string2, shorter = string1) : null;
  var maxLength = longer.length;
  if (maxLength == 0) {
    return 1.0;
  }
  return (maxLength - editDistance(longer, shorter)) / parseFloat(maxLength);
}

function editDistance(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= string1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= string2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (string1.charAt(i - 1) != string2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[string2.length] = lastValue;
  }
  return costs[string2.length];
}

module.exports = getStringsSimilarity;