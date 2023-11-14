require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')
var path = require('path');
const myFilePath = path.join(__dirname, './2gg.png')
console.log("My image path: ", myFilePath)

cron.schedule('0 10 * * 1-5', notify1)
cron.schedule('0 15 * * 3', notify2)
cron.schedule('0 2 * * *', notify3)
// cron.schedule('*/5 * * * * *', notify1)
// cron.schedule('*/5 * * * * *', notify2)
// cron.schedule('*/5 * * * * *', notify3)


var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify1() {
    push.send("WAKE UP", "WAKEY", handleErrors)
}

function notify2(){
    push.send(process.env.USERKEY, "Grocery Time", "get some eggs", myFilePath, handleErrors)
}

function notify3() {
    push.send("SLEEPY", "eepy time", handleErrors)
}

function handleErrors(error, response) {
    if (error) console.log('error: ', error)
    console.log(response)
}
