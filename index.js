var exec = require('child_process').exec;

exec('curl https://www.optimizely.com/signin -s | grep -o /master-[0-9]*\.[0-9]*/ | head -1 | awk \'{print "https://www.optimizely.com"$1"dist/css/app.css"}\' | xargs curl -s | ./node_modules/parker/parker.js -s --format=json', function (error, stdout, stderr) {
  // output is in stdout
  console.log(stdout);
});
