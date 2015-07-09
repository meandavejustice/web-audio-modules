var fs = require('fs');

var head = '<head><link rel="stylesheet" href="style.css" type="text/css" media="screen" /></head>';

fs.readFile('./README.md', {encoding: 'utf-8'}, function(err, data) {
  fs.writeFile('./index.html', head + require('marked')(data), process.exit);
})
