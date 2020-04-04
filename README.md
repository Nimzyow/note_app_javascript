# **`Note App`**

## `Project synopsis`

This was a week long afternoon challenge by Makers Academy which involved us making our own testing framework and to then use that to TDD a note app using vanilla JS, HTML and CSS.

It is a simple application. It essentially allows us to create our own note, have the newly created note display in 20 characters or less and to then allow us to view the note in full if we click on the note.

It was interesting to tackle this challenge using vanilla JS, HTML and CSS as I am more used to using frameworks like React to easily make web applications. I now have a better understanding of how React works because of this and I feel I can pick up any framework that uses JS and quickly get up to speed with it.

Unexpectedly though, the most interesting part for me was the creation of my own testing framework. In a brief Makers tutorial regarding creating a testing framework, they created an object called assert which contained a key value of isTrue with the value being a function call to check for truthy or falsy. This made me pretty curious so I just experimented with creating lots of assertions until I pretty much realised that this is all testing really is. It isn't magic, though it was tempting to think that for a while, it's all just function calls, and I was very happy to figure that out for myself.

I also wanted my applications testing framework to look like a testing framework like Jasmine so decided to implement a descibe and context function to help with that. Both describe and context are essentially functions with a callBack so it was painless to implement them. Have a look at describe.js or context.js to see this implementation.

## `To run`

on the root of the project run

```
npm start
```

go to localhost:8080 on your browser to see the note app.

## `To run tests`

on the browser go to the link:

```
localhost:8080/testingSpec
```

You should see Nimzys testing framework with a list of whats passing or failing.

## `layout of note app`

A layout of the note app can be seen in assets/plan.jpg
