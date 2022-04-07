# Websockets to TouchDesigner

TLDR: Here’s a guide to getting Movenet (Posenet) working with Touchdesigner.

When starting this project, I was honestly kinda shocked that there wasn’t a simpler solution to getting this all up and running. All the other tutorials seemed super convoluded and required all this other software to get started.

People love yarn and all this other stuff but honestly for a newbie, it’s just way simpler for them to jump into this stuff if it’s in regular ol npm.

All that was too much work. I wanted to make it simple for a user to get Posenet points into Touchdesigner and so here are the steps.

1. Let’s make sure we have all our node modules (which honestly should just be express) by running 
```
npm install
```
2. Now open up your browser and go to 
```
http://localhost:3000
```
3. Let’s open up our Touchdesigner file - Poses.toe and very briefly what’s going on here is we start up a web server to receive the websockets from `index.html` we opened up at `localhost:3000`
4. Click on the webserver dat and click restart
5. Open up another tab on your browser and go to
```
http://localhost:8080
```
6. That should be it!

Note: You might have to refresh the posenet tab (The one pointed at localhost:3000)

Note: The deal here is that we have to open 2 tabs, one to deal with the actual movenet pose recognition stuff and then another to get the pose data and then send it to Touchdesigner to be processed.
	
	