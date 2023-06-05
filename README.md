# Node.JS The Complete Guide

## Section 3 — The Basics - Summary - First Exercise

My Solutions for the First Coding Exercise at the end of Section 3 of **[Node.JS — The Complete Guide by Maximillian Schwazrzmüller](https://www.udemy.com/course/nodejs-the-complete-guide/)**.

This is an example of a single page app done in pure, vanilla Node.JS — no Express.JS or other third-party packages, just the libs found with Node.JS (i.e., `fs` & `http`).

In addition to seeing the name added in the Server `console.log(...)` output, it also adds it to the end of a text file, `userList.txt`. Note: after adding user names, if you wish to restore the text file to its original state, delete everything after the "**Spuds McKenzie**" line.

### To Launch

After cloning the repository locally, while in that directory in your command line terminal, it is recommended you have the NPM package, **[Nodemon](https://www.npmjs.com/package/nodemon)**, installed globally (**`$ npm install nodemon -g`**), and run it thus —

```
nodemon app.js
```

Otherwise, you may run it in the standard Node.JS way —

```
node app.js
```

To see the app in action on your local machine, open your browser and go to [http://127.0.0.1:300](http://127.0.0.1:3000).

*June 2023*
