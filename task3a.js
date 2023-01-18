var fs = require("fs");

fs.writeFile('welcome.txt', 'hello node!', function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
});
