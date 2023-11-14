# 06-assignment
in this assignment, I created an app that would message me for wake up texts, sleep reminders, and a reminder to grab groceries every Wednesday.

## Documentation
Initially, I started with trying to upload local files to Github and then to Digital Ocean. In this process, my code would always crash. After fixing the .env file, I realized that although it's running, it's not really pushing the notifications. 

<img width="761" alt="Screen Shot 2023-11-02 at 2 29 01 PM" src="https://github.com/pancake0003/notify-app/assets/146360951/f3c7087d-3c39-4c14-9c60-be73dd82fc8d">

Eventually, I realized that i mixed up my apptoke and userkey.

<img width="431" alt="Screen Shot 2023-11-14 at 12 07 49 AM" src="https://github.com/pancake0003/notify-app/assets/146360951/2cd1454e-55d7-4e50-ac12-3b57063aec5a">

So after some quick fixes to the code, I decided to make it so that the app sends me notifs:
1. every Monday to Friday mornings 10 am to wake up
2. every day at 3am to sleep
3. every Wednesday 3pm to get some groceries

I implemented this through a helpful [cron schedule website](https://crontab.guru/):

<img width="1108" alt="Screen Shot 2023-11-14 at 12 14 27 AM" src="https://github.com/pancake0003/notify-app/assets/146360951/3b4117cf-1f49-4eb7-b7cb-f4343771c372">

Eventually, the app would send me something like this:
![image](https://github.com/pancake0003/notify-app/assets/146360951/4c28998d-1715-494b-8fd1-99999491daf4)

## Used
[pm2](https://pm2.keymetrics.io/)

[Digital Ocean](https://www.digitalocean.com/)

[node.js](https://nodejs.org/en)

[pushover api](https://pushover.net/api)
