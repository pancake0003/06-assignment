# 06-assignment
in this assignment, I created an app that would message me for wake up texts, sleep reminders, and a reminder to grab groceries every Wednesday.

## Documentation
Initially, I started with trying to upload local files to Github and then to Digital Ocean. In this process, my code would always crash. After fixing the .env file, I realized that although it's running, it's not really pushing the notifications. 

Eventually, I realized that i mixed up my apptoke and userkey.


So after some quick fixes to the code, I decided to make it so that the app sends me notifs:
1. every Monday to Friday mornings 10 am to wake up
2. every day at 3am to sleep
3. every Wednesday 3pm to get some groceries

I implemented this through a helpful cron schedule website:


Eventually, the app would send me something like this:


## Used
[pm2](https://pm2.keymetrics.io/)

[Digital Ocean](https://www.digitalocean.com/)

[node.js](https://nodejs.org/en)

[pushover api](https://pushover.net/api)
