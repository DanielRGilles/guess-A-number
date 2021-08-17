## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## Html Element
    1. input number box
    2. button to check input
    3. results of too high, too low
    4. final result of out of guesses = loss or win

## state
    1. create a default correct number on each reload of page  
       
    2. count the number of guesses

## events
    1. on click
        numberify the input
        check it against the correct value
        display if the guess was too high, too low, or correct
        as well as decrementing number of guesses

## functions needed
 1. Correct answer maker using 
    Math.floor(Math.random(* 10))
    or setRange function so the math random is always 1-10
 2. 
