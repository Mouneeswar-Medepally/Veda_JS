/*

JavaScript events are actions or occurrences that happen in the browser 
and can be detected and handled by JavaScript. 
Events allow us to create interactive and dynamic web applications. 

### 1. **Types of Events**

- **Mouse Events:**
  - `click`: Fires when an element is clicked.
  - `dblclick`: Fires when an element is double-clicked.
  - `mousedown`: Fires when a mouse button is pressed down on an element.
  - `mouseup`: Fires when a mouse button is released over an element.
  - `mousemove`: Fires when the mouse pointer is moving while it is over an element.
  - `mouseover`: Fires when the mouse pointer is moved onto an element.
  - `mouseout`: Fires when the mouse pointer is moved out of an element.

- **Keyboard Events:**
  - `keydown`: Fires when a key is pressed down.
  - `keypress`: Fires when a key is pressed down and 
  that key normally produces a character value (deprecated).
  - `keyup`: Fires when a key is released.

- **Form Events:**
  - `submit`: Fires when a form is submitted.
  - `change`: Fires when the value of an element has been changed (for input, select, and textarea elements).
  - `input`: Fires when the value of an input element changes.
  - `focus`: Fires when an element gets focus.
  - `blur`: Fires when an element loses focus.

- **Window Events:**
  - `load`: Fires when the whole page has loaded, including all dependent resources such as stylesheets and images.
  - `resize`: Fires when the document view is resized.
  - `scroll`: Fires when the document view or an element has been scrolled.
  - `unload`: Fires when the page is unloaded (deprecated).

### 2. **Event Handling**

To handle events in JavaScript, you need to:

- **Attach an Event Listener:** This involves specifying the event type 
and providing a function to execute when the event occurs.

#### Methods to Attach Event Listeners:

1. **Inline Event Handlers:**
   - Directly in HTML:
     ```html
     <button onclick="alert('Button clicked!')">Click me</button>
     ```

2. **Event Handler Properties:**
   - Assign a function to an event property:
     ```javascript
     document.getElementById('myButton').onclick = function() {
       alert('Button clicked!');
     };
     

     When an event handler property is set, it overrides any previously assigned function for that event.
     const button = document.getElementById('myButton');

    // Assign the first event handler
    button.onclick = function() {
    console.log('First handler');
    };

    // Assign the second event handler, which overrides the first one
    button.onclick = function() {
    console.log('Second handler');
    };

    // When the button is clicked, only the second handler will be executed
    button.click();
    // Output:
    // Second handler
     ```

3. **`addEventListener` Method:**
   - Preferred method for modern JavaScript, allowing multiple listeners for the same event:
     ```javascript
     document.getElementById('myButton').addEventListener('click', function() {
       alert('Button clicked!');
     });

     The addEventListener method does not override existing event listeners. 
     Instead, it adds a new event listener to the list of listeners for that event. 
     This allows multiple listeners to be attached to the same event and 
     ensures that all of them will be called when the event occurs.

     Example:
     const button = document.getElementById('myButton');

    // Add the first event listener
    button.addEventListener('click', function() {
    console.log('First handler');
    });

    // Add the second event listener
    button.addEventListener('click', function() {
    console.log('Second handler');
    });

    // When the button is clicked, both handlers will be executed in the order they were added
    button.click();
    // Output:
    // First handler
    // Second handler
     ```

### 3. **Event Object**

When an event occurs, the event object contains useful information about the event. 
It is automatically passed to the event handler function.

#### Properties of the Event Object:
- `type`: The type of event that occurred.
- `target`: The element that triggered the event.
- `currentTarget`: The element to which the event handler is attached.
- `preventDefault()`: Prevents the default action associated with the event.
- `stopPropagation()`: Stops the event from propagating (bubbling) up or down the DOM.

Example:
```javascript
document.getElementById('myButton').addEventListener('click', function(event) {
  console.log(event.type); // "click"
  console.log(event.target); // The button element
  event.preventDefault(); // Prevent default action (if any)
});
```

### 4. **Event Propagation**

Event propagation determines the order in which event handlers are executed 
when multiple elements are involved. 
There are three phases:

1. **Capturing Phase:** The event travels from the root to the target element.
2. **Target Phase:** The event reaches the target element.
3. **Bubbling Phase:** The event bubbles up from the target element to the root.

#### Example of Event Propagation:
```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```javascript
document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent clicked');
}, true); // Capture phase

document.getElementById('child').addEventListener('click', function() {
  console.log('Child clicked');
}); // Bubbling phase

// Clicking the button will log:
// "Parent clicked" (capturing)
// "Child clicked" (target)
// "Parent clicked" (bubbling)
```

### 5. **Event Delegation**

Event delegation is a technique where a single event listener is added to a 
parent element to manage events for multiple child elements. 
This is efficient and helps manage dynamic content.

#### Example of Event Delegation:
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
document.getElementById('list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    alert('Item clicked: ' + event.target.textContent);
  }
});
```



The event object in JavaScript is a crucial part of handling events. 
It contains information about the event that occurred, providing properties and
methods to manage and interact with the event.

### Event Object

When an event is triggered, the event object is automatically passed to the event handler function. 
This object contains details about the event, including the type of event, the target element, and other relevant information.

### Useful Properties of the Event Object

1. **type**
   - Describes the type of event that occurred.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       console.log(event.type); // "click"
     });
     ```

2. **target**
   - References the element that triggered the event.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       console.log(event.target); // The element that was clicked
     });
     ```

3. **currentTarget**
   - References the element to which the event handler is attached.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       console.log(event.currentTarget); // The element with the event listener
     });
     ```

4. **bubbles**
   - Indicates whether the event bubbles up through the DOM.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       console.log(event.bubbles); // true or false
     });
     ```

5. **cancelable**
   - Indicates whether the event can be canceled.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       console.log(event.cancelable); // true or false
     });
     ```

6. **defaultPrevented**
   - Indicates whether the default action associated with the event has been prevented.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       event.preventDefault();
       console.log(event.defaultPrevented); // true
     });
     ```

     ```

7. **key **
    - `key`: The value of the key pressed (for keyboard events).
    - Example:
      ```javascript
      element.addEventListener('keydown', function(event) {
        console.log(`Key: ${event.key}`);
      });
      ```

8. **relatedTarget**
    - References a secondary target for the event, if there is one. Often used with mouseover and mouseout events.
    - Example:
      ```javascript
      element.addEventListener('mouseover', function(event) {
        console.log(event.relatedTarget); // The element the mouse came from
      });
      ```

### Useful Methods of the Event Object

1. **preventDefault()**
   - Prevents the default action associated with the event.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       event.preventDefault(); // Prevents the default click action
     });
     ```

2. **stopPropagation()**
   - Stops the event from propagating (bubbling) up the DOM tree.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       event.stopPropagation(); // Stops the event from bubbling
     });
     ```

3. **stopImmediatePropagation()**
   - Prevents other listeners of the same event from being called.
   - Example:
     ```javascript
     element.addEventListener('click', function(event) {
       event.stopImmediatePropagation(); // No other listeners will be called
     });
     ```

### Example: Combining Properties and Methods

```html
<button id="myButton">Click me</button>
```

```javascript
document.getElementById('myButton').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default action
  console.log('Event type:', event.type); // "click"
  console.log('Event target:', event.target); // <button id="myButton">
});
```
*/

// document.getElementById('submit').onclick = function() {
//   console.log('Button clicked!');
// };
// document.getElementById('submit').onmousemove = function() {
//   console.log('Button clicked!');
// };
// document.body.addEventListener('click', function() {
//   console.log("body clicked")
// });
// document.getElementById('myList').addEventListener('click', function(e) {
//   console.log("List clicked")
// },true);
// document.getElementsByTagName('li')[2].addEventListener('click', function() {
//   console.log("last item clicked")
// });

// document.getElementById('submit').onclick = function() {
//   console.log('Button clicked 1!');
// };

// document.getElementById('submit').onclick = function() {
//   console.log('Button clicked 2!');
// };

// document.getElementById('submit').addEventListener('click', function() {
//     console.log("Button clicked 1")
//   });

//   document.getElementById('submit').addEventListener('click', function() {
//     console.log("Button clicked 2")
//   });
// document.body.addEventListener('click',()=>{
//   console.log('body')
// },true)
// document.getElementById('myList').addEventListener('click', function(e) {
//   // e.stopPropagation()
//     console.log("List clicked")
//   },true);

//Event delegation:
document.getElementById('myList').addEventListener('click', function (e) {
  e.preventDefault()
  const navItem = e.target;
  const path = navItem.getAttribute('href');
  if(path){
    window.location.href = path
  }

});