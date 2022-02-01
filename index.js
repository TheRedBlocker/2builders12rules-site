var FtpDeploy = require("ftp-deploy");
var { execSync } = require('child_process')
var fs = require('fs')
var config = require('./config.json')
config.localRoot = __dirname + config.localRoot

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

console.log('Started The Auto Updater For Every 30 Minutes')

setInterval(() => {
    console.log('Started The Update')
    sleep(500)
    if(fs.existsSync('./html/2builders12rules-site/')) fs.rmdirSync('./html/2builders12rules-site/', { recursive: true })
    sleep(500)
    execSync('git clone https://<username>:<personal access tokens>@github.com/TheRedBlocker/2builders12rules-site.git html/2builders12rules-site')
    sleep(7000)
    var ftpDeploy = new FtpDeploy();
    ftpDeploy
        .deploy(config)
        .then(res => console.log("finished:", res))
        .catch(err => console.log(err));
    console.log('Update Ended')
}, 1800000)