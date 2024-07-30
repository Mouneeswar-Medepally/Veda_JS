/*

### 1. **Document Structure**
The DOM represents an HTML document as a tree structure where each node is an object representing a part of the document. 
There are several types of nodes in the DOM, including:

- **Document Node**: The root of the document.
- **Element Nodes**: Represent HTML elements.
- **Text Nodes**: Represent the text content of elements.
- **Attribute Nodes**: Represent the attributes of elements.
- **Comment Nodes**: Represent comments in the HTML.

### 2. **Node Hierarchy**
The nodes in the DOM are arranged in a hierarchical structure. For example, an HTML document with a structure like:

```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>Paragraph of text.</p>
  </body>
</html>
```

Would be represented in the DOM as:

- Document
  - html (Element)
    - head (Element)
      - title (Element)
        - "Page Title" (Text)
    - body (Element)
      - h1 (Element)
        - "Main Heading" (Text)
      - p (Element)
        - "Paragraph of text." (Text)

### 3. **Accessing the DOM**
You can access and manipulate the DOM using JavaScript. For example:

- **Selecting Elements**: Using methods like `getElementById`, `getElementsByClassName`, `getElementsByTagName`, 
`querySelector`, and `querySelectorAll`.
  ```javascript
  document.getElementById("myId"); // Selects an element by ID
  document.querySelector(".myClass"); // Selects the first element with the specified class
  ```

- **Modifying Elements**: Using properties and methods to change the content, attributes, or style of elements.
  ```javascript
  let element = document.getElementById("myId");
  element.textContent = "New Content"; // Changes the text content
  element.setAttribute("class", "newClass"); // Sets a new attribute
  element.style.color = "red"; // Changes the CSS style
  ```

### 4. **Event Handling**
The DOM allows you to set up event listeners to respond to user interactions 
like clicks, keypresses, or mouse movements. 
This is typically done using methods like `addEventListener`.

```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button was clicked!");
});
```

### 5. **Dynamic Manipulation**
JavaScript can be used to create, remove, or change elements dynamically. 
Methods like `createElement`, `appendChild`, `removeChild`, and `replaceChild` are used for this purpose.

```javascript
let newElement = document.createElement("div");
newElement.textContent = "Hello, world!";
document.body.appendChild(newElement); // Adds the new element to the body

let existingElement = document.getElementById("oldElement");
existingElement.parentNode.removeChild(existingElement); // Removes the element
```

### 6. **Traversing the DOM**
You can navigate through the DOM tree using properties like `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, and `previousSibling`.

```javascript
let parent = element.parentNode; // Gets the parent node
let firstChild = parent.firstChild; // Gets the first child node
let nextSibling = element.nextSibling; // Gets the next sibling node
```

### 7. **Rendering and Reflow**
When the DOM is manipulated, the browser may need to re-render the affected parts of the document. This can involve reflow (calculating the layout) and repaint (drawing the pixels on the screen). Efficient DOM manipulation minimizes reflow and repaint operations to maintain good performance.



------------------------CSS MANIPULATION----------------------------------



CSS manipulation in the DOM is typically performed using various properties and methods available on HTML elements. 
Here is a detailed list of these properties and methods along with their descriptions:

### 1. **Element.style Property**

The `style` property allows you to directly manipulate the inline styles of an element.

- **Setting Styles**: You can set individual CSS properties directly.
  ```javascript
  let element = document.getElementById("myElement");
  element.style.color = "red";
  element.style.backgroundColor = "blue";
  element.style.fontSize = "20px";
  ```

- **Getting Styles**: You can retrieve the current value of an inline style.
  ```javascript
  console.log(element.style.color); // Outputs the color style applied inline
  ```

### 2. **Element.className Property**

The `className` property allows you to get or set the entire class attribute of an element.

- **Setting Class Names**: You can set one or more class names.
  ```javascript
  element.className = "class1 class2";
  ```

- **Getting Class Names**: You can retrieve the current class names.
  ```javascript
  console.log(element.className); // Outputs "class1 class2"
  ```

### 3. **Element.classList Property**

The `classList` property provides a convenient way to work with an element's classes. 
It returns a DOMTokenList that allows you to manipulate classes without affecting other classes.

- **Adding Classes**:
  ```javascript
  element.classList.add("newClass");
  ```

- **Removing Classes**:
  ```javascript
  element.classList.remove("oldClass");
  ```

- **Toggling Classes**:
  ```javascript
  element.classList.toggle("toggleClass");
  ```

- **Checking for Classes**:
  ```javascript
  if (element.classList.contains("checkClass")) {
    console.log("Class exists");
  }
  ```

### 4. **Element.getAttribute() and Element.setAttribute()**

These methods allow you to get or set any attribute, including the `style` and `class` attributes.

- **Setting an Attribute**:
  ```javascript
  element.setAttribute("style", "color: red; background-color: blue;");
  element.setAttribute("class", "class1 class2");
  ```

- **Getting an Attribute**:
  ```javascript
  console.log(element.getAttribute("style")); // Outputs the style attribute
  ```

### 5. **window.getComputedStyle()**

The `getComputedStyle()` method retrieves the computed style of an element, which includes all the styles applied by CSS, inline styles, and inherited styles.

- **Getting Computed Styles**:
  ```javascript
  let computedStyle = window.getComputedStyle(element);
  console.log(computedStyle.color); // Outputs the computed color style
  ```

### 6. **Element.style.cssText Property**

The `cssText` property allows you to set or get the entire inline style as a single string.

- **Setting Inline Styles**:
  ```javascript
  element.style.cssText = "color: red; background-color: blue; font-size: 20px;";
  ```

- **Getting Inline Styles**:
  ```javascript
  console.log(element.style.cssText); // Outputs all the inline styles
  ```

### 7. **Manipulating Pseudo-Elements**

Pseudo-elements like `::before` and `::after` cannot be directly manipulated through the DOM,
 but their styles can be changed using CSS rules or by modifying the stylesheet dynamically.

- **Adding a CSS Rule for Pseudo-Elements**:
  ```javascript
  let sheet = document.styleSheets[0];
  sheet.insertRule("#myElement::before { content: 'Prefix'; color: red; }", sheet.cssRules.length);
  ```

Creating, modifying, appending, and removing elements from the DOM involves various methods and properties available in the DOM API. Here is a detailed explanation of these methods:

### Creating Elements

1. **`document.createElement()`**

   - **Description**: Creates a new element with the specified tag name.
   - **Syntax**: 
     ```javascript
     let newElement = document.createElement(tagName);
     ```
   - **Example**: 
     ```javascript
     let div = document.createElement('div');
     div.textContent = 'Hello, world!';
     ```

2. **`document.createTextNode()`**

   - **Description**: Creates a new text node with the specified text.
   - **Syntax**: 
     ```javascript
     let textNode = document.createTextNode(text);
     ```
   - **Example**: 
     ```javascript
     let textNode = document.createTextNode('Hello, world!');
     ```

3. **`document.createDocumentFragment()`**

   - **Description**: Creates an empty DocumentFragment object, which can be used as a temporary container for elements before inserting them into the document.
   - **Syntax**: 
     ```javascript
     let fragment = document.createDocumentFragment();
     ```
   - **Example**: 
     ```javascript
     let fragment = document.createDocumentFragment();
     let div = document.createElement('div');
     div.textContent = 'Hello, world!';
     fragment.appendChild(div);
     ```


### Appending Elements

1. **`Node.appendChild()`**

   - **Description**: Adds a node to the end of the list of children of a specified parent node.
   - **Syntax**: 
     ```javascript
     parent.appendChild(node);
     ```
   - **Example**: 
     ```javascript
     document.body.appendChild(div);
     ```

2. **`Node.insertBefore()`**

   - **Description**: Inserts a node before a reference node as a child of a specified parent node.
   - **Syntax**: 
     ```javascript
     parent.insertBefore(newNode, referenceNode);
     ```
   - **Example**: 
     ```javascript
     let anotherDiv = document.createElement('div');
     document.body.insertBefore(anotherDiv, div);
     ```

3. **`ParentNode.append()`**

   - **Description**: Inserts a set of Node objects or DOMString objects after the last child of the ParentNode.
   - **Syntax**: 
     ```javascript
     parent.append(nodes or strings);
     ```
   - **Example**: 
     ```javascript
     document.body.append('Hello, world!', div);
     ```

4. **`ParentNode.prepend()`**

   - **Description**: Inserts a set of Node objects or DOMString objects before the first child of the ParentNode.
   - **Syntax**: 
     ```javascript
     parent.prepend(nodes or strings);
     ```
   - **Example**: 
     ```javascript
     document.body.prepend('Hello, world!', div);
     ```

### Removing Elements

1. **`Node.removeChild()`**

   - **Description**: Removes a child node from a specified parent node.
   - **Syntax**: 
     ```javascript
     parent.removeChild(node);
     ```
   - **Example**: 
     ```javascript
     document.body.removeChild(div);
     ```

2. **`ChildNode.remove()`**

   - **Description**: Removes the element from the DOM.
   - **Syntax**: 
     ```javascript
     node.remove();
     ```
   - **Example**: 
     ```javascript
     div.remove();
     ```

### Replacing Elements

1. **`Node.replaceChild()`**

   - **Description**: Replaces a child node within the specified parent node.
   - **Syntax**: 
     ```javascript
     parent.replaceChild(newNode, oldNode);
     ```
   - **Example**: 
     ```javascript
     let newDiv = document.createElement('div');
     document.body.replaceChild(newDiv, div);
     ```

Event listeners are a fundamental part of handling user interactions and other events in web applications. Here’s a detailed explanation of how event listeners work, how to use them, and best practices.

### What is an Event Listener?

An event listener is a function in JavaScript that waits for a specified event to occur. When the event occurs, the event listener calls a specified function to handle the event.

### Adding Event Listeners

1. **`addEventListener` Method**

   The `addEventListener` method attaches an event handler to an element.

   - **Syntax**:
     ```javascript
     element.addEventListener(event, function, useCapture);
     ```
   - **Parameters**:
     - `event`: A string representing the event type (e.g., 'click', 'mouseover').
     - `function`: The function to call when the event occurs.
     - `useCapture` (optional): A boolean indicating whether to use event capturing or bubbling. Default is `false` (bubbling).

   - **Example**:
     ```javascript
     let button = document.getElementById('myButton');
     button.addEventListener('click', function() {
       alert('Button clicked!');
     });
     ```

### Removing Event Listeners

1. **`removeEventListener` Method**

   The `removeEventListener` method removes an event handler that has been attached with `addEventListener`.

   - **Syntax**:
     ```javascript
     element.removeEventListener(event, function, useCapture);
     ```
   - **Parameters**:
     - `event`: A string representing the event type.
     - `function`: The function to remove.
     - `useCapture` (optional): A boolean indicating whether to use event capturing or bubbling.

   - **Example**:
     ```javascript
     function handleClick() {
       alert('Button clicked!');
     }

     button.addEventListener('click', handleClick);
     button.removeEventListener('click', handleClick);
     ```

In addition to the commonly used `addEventListener` and `removeEventListener` methods, there are other ways to add or remove event listeners in JavaScript. Here are the different methods, including their advantages and disadvantages:

### Using Inline Event Handlers

1. **HTML Inline Event Handlers**

   - **Description**: Add event handlers directly in the HTML markup.
   - **Syntax**:
     ```html
     <button onclick="handleClick()">Click Me</button>
     ```
   - **Advantages**:
     - Simple to implement.
     - Easy to understand for small projects.
   - **Disadvantages**:
     - Mixes HTML and JavaScript, making the code harder to maintain.
     - Limited to inline functions or global functions.
   
   - **Example**:
     ```html
     <html>
     <body>
       <button onclick="alert('Button clicked!')">Click Me</button>
     </body>
     </html>
     ```

### Using Element Properties

2. **Element Properties (Direct Assignment)**

   - **Description**: Assign event handlers directly to an element’s property.
   - **Syntax**:
     ```javascript
     element.onclick = function;
     ```
   - **Advantages**:
     - Easy to understand and implement.
     - Useful for simple event handling.
   - **Disadvantages**:
     - Only one event handler per event type (overwrites any existing handler).
   
   - **Example**:
     ```html
     <html>
     <body>
       <button id="myButton">Click Me</button>
       <script>
         let button = document.getElementById('myButton');
         button.onclick = function() {
           alert('Button clicked!');
         };
       </script>
     </body>
     </html>
     ```

### Using Element Methods


### Removing Event Listeners Using Alternative Methods

3. **Using Element Properties to Remove Event Listeners**

   - **Description**: Remove event handlers by setting the property to `null`.
   - **Syntax**:
     ```javascript
     element.onclick = null;
     ```
   - **Example**:
     ```html
     <html>
     <body>
       <button id="myButton">Click Me</button>
       <script>
         let button = document.getElementById('myButton');
         function handleClick() {
           alert('Button clicked!');
         }
         button.onclick = handleClick;
         // Remove event listener
         button.onclick = null;
       </script>
     </body>
     </html>
     ```

JavaScript HTML DOM Collections:

An HTMLCollection object is an array-like list (collection) of HTML elements.
The elements in the collection can be accessed by an index number.

An HTMLCollection is NOT an array!

An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.


The HTML DOM NodeList Object:

A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes. 

Most browsers return a NodeList object for the method querySelectorAll().


The Difference Between an HTMLCollection and a NodeList:
A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.


other methods:

In JavaScript, the `insertAdjacentHTML`, `insertAdjacentText`, and `insertAdjacentElement` methods allow you to insert content into the DOM at specified positions relative to an element. Here are the differences and examples of each:

### `insertAdjacentHTML`

The `insertAdjacentHTML` method parses the specified text as HTML and inserts the resulting nodes into the DOM at a specified position.

```javascript
element.insertAdjacentHTML(position, text);
```

- **Position values**:
  - `"beforebegin"`: Before the element itself.
  - `"afterbegin"`: Just inside the element, before its first child.
  - `"beforeend"`: Just inside the element, after its last child.
  - `"afterend"`: After the element itself.

**Example**:
```javascript
let element = document.getElementById('myElement');
element.insertAdjacentHTML('beforebegin', '<p>Inserted HTML before the element</p>');
```

### `insertAdjacentText`

The `insertAdjacentText` method inserts the given text node at a specified position relative to the element. Unlike `insertAdjacentHTML`, this method does not parse the text as HTML.

```javascript
element.insertAdjacentText(position, text);
```

- **Position values**:
  - `"beforebegin"`: Before the element itself.
  - `"afterbegin"`: Just inside the element, before its first child.
  - `"beforeend"`: Just inside the element, after its last child.
  - `"afterend"`: After the element itself.

**Example**:
```javascript
let element = document.getElementById('myElement');
element.insertAdjacentText('beforebegin', 'Inserted text before the element');
```

### `insertAdjacentElement`

The `insertAdjacentElement` method inserts the specified element at a specified position relative to the element.

```javascript
element.insertAdjacentElement(position, newElement);
```

- **Position values**:
  - `"beforebegin"`: Before the element itself.
  - `"afterbegin"`: Just inside the element, before its first child.
  - `"beforeend"`: Just inside the element, after its last child.
  - `"afterend"`: After the element itself.

**Example**:
```javascript
let element = document.getElementById('myElement');
let newElement = document.createElement('div');
newElement.textContent = 'Inserted element';
element.insertAdjacentElement('beforebegin', newElement);
```

### Summary of Differences

- **`insertAdjacentHTML`**: Inserts HTML content. The string is parsed as HTML, so it can include HTML tags.
- **`insertAdjacentText`**: Inserts plain text. The string is not parsed as HTML, so HTML tags will be treated as plain text.
- **`insertAdjacentElement`**: Inserts an existing element. You need to create the element before inserting it.

### Examples with HTML Structure

Given the following HTML structure:

```html
<div id="container">
    <div id="myElement">Hello, World!</div>
</div>
```

Using these methods:

```javascript
let element = document.getElementById('myElement');

// Using insertAdjacentHTML
element.insertAdjacentHTML('beforebegin', '<p>HTML before the element</p>');

// Using insertAdjacentText
element.insertAdjacentText('afterbegin', 'Text after begin');

// Using insertAdjacentElement
let newElement = document.createElement('div');
newElement.textContent = 'Element after the element';
element.insertAdjacentElement('afterend', newElement);
```

Will result in the following HTML structure:

```html
<div id="container">
    <p>HTML before the element</p>
    <div id="myElement">
        Text after begin
        Hello, World!
    </div>
    <div>Element after the element</div>
</div>
```
*/

// const myDiv=document.getElementById('myDiv');
// console.log(myDiv.style.color)
// let computedStyle = window.getComputedStyle(myDiv);
// console.log(computedStyle); 
// Outputs the computed color style
// myDiv.style.backgroundColor='black';
// myDiv.style.color='white';
// myDiv.style.width='300px';
// myDiv.style={
//   backgroundColor:'black',
//   color:'white',
//   width:'300px'
// }

// myDiv.className='myClass1'
// myDiv.classList.add('myClass1')
// myDiv.classList.remove('myClass2');
// myDiv.classList.toggle('myClass1');

// myDiv.setAttribute('style','') --- task

// myDiv.getAttribute('class');


// const myDiv=document.getElementById('myDiv');
// const div2 = document.createElement('div');
// div2.innerText='Everyone'
// document.body.insertBefore(div2, myDiv);

// const myDiv=document.getElementById('myDiv');
// myDiv.ins
// document.body.removeChild(myDiv)
// myDiv.remove()
// const div2=document.createElement('div');
// document.body.appendChild(div2)
// document.body.replaceChild(document.createElement('div'),myDiv)
// const div2 = document.createElement('div');

// const myDiv=document.querySelector('#myDiv');
// myDiv.classList.add('myClass2')
// myDiv.classList.remove('myClass1')
// myDiv.classList.toggle('myClass1')
// console.log(myDiv.classList.contains('myClass2'))