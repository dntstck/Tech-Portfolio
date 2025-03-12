# What is the World Wide Web?

 The world wide web is a subset of the internet. it's a collection of servers (dedicated machines) who's sole purpose is to host and manage web pages. These servers send, manage and receive data from a client (web browser), which then displays information to the user.

 The internet itself is also a collection of servers, but their purpose extrapolates to email, file transfer, ftp, ssh etc.

# What are the functional differences between front end development and back-end development?

Front end development consists of everything the user "sees" on a displayed webpage, such as HTML, CSS, Client side Javascript, etc. 

Back end development consists of everything server-side, or anything the user does not see, such as data sent from the client to the server, databases, API's, server-side scripting such as PHP, server side coding such as Java but this can include Javascript too when using Node.js

# Explain what occurs in the back end during a web interaction

I will use Express as an example:

> User connects to a webpage (https://example.com) in their browser (firefox)

> Firefox sends a request to the server (GET)

>Server is using Express [require('express')]
> Express uses middleware functions & routes to direct the user.

> if Express cannot resolve a url, it will throw a 404 error [using Express' app.use]

> Successful routes will display the webpage the user has requested. 

# Explain a MERN stack

MongoDB, Express, React and Node.js is a MERN stack. 

A stack is a bundle of components used in development that work together to handle a web page application, such as the back end, front end or database.





