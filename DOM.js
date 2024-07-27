/*
The Document Object Model (DOM) is a programming interface for web documents. 
It represents the structure of a document as a tree of objects, making it possible for programs and scripts to dynamically access and update the content, structure, and style of documents. Here's a detailed explanation with key points and notes:

Key Concepts
Document: The HTML or XML document that is loaded into a web browser.

Object: Each element in the document (like headers, paragraphs, images, etc.) is represented as an object. 
These objects can be manipulated using JavaScript.


DOM Tree Structure
Nodes: The DOM tree consists of different types of nodes:
Element Nodes: Represent HTML tags (e.g., <div>, <p>).
Text Nodes: Represent the text inside elements.
Attribute Nodes: Represent the attributes of elements (e.g., class, id).
Comment Nodes: Represent comments in the HTML or XML.


Accessing the DOM
Document Object: The document object is the entry point to access the DOM. Common methods include:
document.getElementById(id): Selects an element by its ID.
document.getElementsByClassName(className): Selects elements by their class name.
document.getElementsByTagName(tagName): Selects elements by their tag name.
document.querySelector(selector): Selects the first element that matches a CSS selector.
document.querySelectorAll(selector): Selects all elements that match a CSS selector.
*/