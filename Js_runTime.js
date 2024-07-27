/*

JavaScript runtime environments are platforms or systems that 
provide the necessary components to execute JavaScript code. 
The most well-known JavaScript runtime environments are web browsers and Node.js.

Components of a Browser's JavaScript Runtime Environment:
JavaScript Engine: This is the core part that interprets and executes JavaScript code. 
For example, Chrome’s V8 engine.
Web APIs: These are additional APIs provided by the browser that allow JavaScript to interact with the browser and the operating system.
Examples include:
DOM (Document Object Model): Methods for manipulating the HTML and CSS.
BOM (Browser Object Model): Methods for interacting with the browser itself, like window and navigator.
Fetch API: For making HTTP requests.
Web Storage API: For local storage and session storage.
Timers: Functions like setTimeout and setInterval.

Example:
When you run JavaScript code in a web page, 
the JavaScript engine executes the code,
and you can use the Web APIs to manipulate the DOM, make network requests, etc.

document.getElementById('myButton').addEventListener('click', () => {
  alert('Button clicked!');
});

In this example, 
document.getElementById and alert are part of the Web APIs provided by the browser.

1. Web Browsers
Web browsers like Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge have built-in JavaScript engines that execute JavaScript code. Each browser uses a different JavaScript engine:

Chrome: V8 Engine
Firefox: SpiderMonkey
Safari: JavaScriptCore (also known as Nitro)
Edge: Originally Chakra, now also V8 (as it’s based on Chromium)


Event Loop
Both web browsers and Node.js use an event-driven architecture, which means they use an event loop to handle asynchronous operations.

How the Event Loop Works:
Call Stack: This is where the JavaScript code gets executed. Functions are pushed onto the call stack when they are called, and popped off when they return.
Task Queue: This is where asynchronous tasks are queued, like callbacks from setTimeout, fetch, or I/O operations in Node.js.
Event Loop: Continuously checks the call stack to see if it’s empty. If the call stack is empty, it checks the task queue and pushes the first task onto the call stack, allowing it to be executed.


console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');

In this example:

"Start" is logged to the console.
The setTimeout callback is placed in the task queue and waits for the call stack to be empty after 1000 milliseconds.
"End" is logged to the console.
After 1000 milliseconds, the callback from setTimeout is pushed to the call stack and executed, logging "Timeout callback" to the console.

*/

console.log('Start');
let shouldPrintEnd=false
setTimeout(() => {
  console.log('Timeout callback');
}, 0);
