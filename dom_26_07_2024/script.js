// console.log(document.getElementById('myName'));
// console.log(document.getElementsByClassName('name-class'))
// console.log(document.getElementsByTagName('p'))
// console.log(document.querySelector('.name-class'))
// console.log(document.querySelectorAll('.name-class'))

const myName=document.getElementById('myName');
// console.log(myName)
// console.log(myName.textContent)
// console.log(myName.outerText);
// console.log(myName.innerText);
// myName.innerHTML='<div>My name is something</div>'
// console.log(myName.outerHTML)
// console.log(myName.innerHTML)
// myName.outerText="My name is Champ"
// myName.innerText="My name is Cams"
// myName.outerText='<div id=myName>My name is narendra</div>'


/*
The <script> tag in HTML is used to embed or reference executable scripts within a web page. 
These scripts are usually written in JavaScript, although other languages like VBScript can be used (though VBScript is deprecated and not widely supported). 
The <script> tag plays a crucial role in adding interactivity and dynamic content to web pages.

Attributes of the <script> Tag:

src (source):
Specifies the URL of an external script file.
Example: <script src="path/to/script.js"></script>

type:
Specifies the MIME type of the script. The default value is text/javascript.
Example: <script type="text/javascript"></script>

async:
Boolean attribute that specifies that the script should be 
executed asynchronously as soon as it is available. Only for external scripts.
Example: <script src="path/to/script.js" async></script>

defer:
Boolean attribute that specifies that the script should be executed when the page has finished parsing. Only for external scripts.
Example: <script src="path/to/script.js" defer></script>

The defer attribute works only for external scripts specified with the src attribute. It has no effect on inline scripts.

crossorigin:
Configures the CORS (Cross-Origin Resource Sharing) settings for the script. It can have values like anonymous or use-credentials.
Example: <script src="path/to/script.js" crossorigin="anonymous"></script>

nomodule:
Indicates that the script should not be executed in browsers that support ES modules.
Example: <script src="path/to/script.js" nomodule></script>
referrerpolicy:
Specifies the referrer information to be sent with requests.
Example: <script src="path/to/script.js" referrerpolicy="no-referrer"></script>


Inline vs. External Scripts
Inline Script:

The script is written directly within the <script> tag.
<script>
  console.log('Hello, world!');
</script

External Script:
The script is placed in an external file and referenced using the src attribute.
<script src="path/to/script.js"></script>

Synchronous vs. Asynchronous Loading:

Synchronous Loading:
The default behavior where the script is loaded and executed immediately, 
blocking further parsing of the HTML document.

<script src="path/to/script.js"></script>

Asynchronous Loading (async):

The script is fetched asynchronously and executed as soon as it is available, without blocking HTML parsing.

<script src="path/to/script.js" async></script>

Deferred Loading (defer):

The script is fetched asynchronously but executed only after the HTML document has been fully parsed.
<script src="path/to/script.js" defer></script>


Placement of script tag:

The placement of the <script> tag in the HTML document, whether in the <head> tag or the <body> tag, depends on several factors, 
such as the purpose of the script, when it needs to be executed, and performance considerations. 

When to Declare Scripts in the <head> Tag
Critical Scripts:

If the script is essential for rendering the initial content of the page 
(e.g., feature detection scripts, CSS preprocessors, or scripts that need to run before any other scripts).

Example:
<head>
  <script src="critical-script.js"></script>
</head>

Analytics and Monitoring:

Scripts for analytics (like Google Analytics) and performance monitoring are often placed in the <head> to start tracking as early as possible.
Example:
<head>
  <script async src="https://www.google-analytics.com/analytics.js"></script>
</head>

Asynchronous Scripts (async):

When using the async attribute, the script will download in parallel with the HTML parsing and execute as soon as it’s downloaded.
This placement is common for third-party scripts.

Example:
<head>
  <script async src="async-script.js"></script>
</head>

Deferred Scripts (defer):

Using the defer attribute allows scripts to be placed in the <head> while deferring execution until after the HTML is fully parsed.
Example:
<head>
  <script defer src="deferred-script.js"></script>
</head>

When to Declare Scripts in the <body> Tag
Non-Critical Scripts:

Scripts that are not essential for the initial rendering of the page can be placed at the end of the <body> tag to ensure the page content is loaded first.
Example:
<body>
  <!-- Page content -->
  <script src="non-critical-script.js"></script>
</body>

DOM-Dependent Scripts:

Scripts that depend on the DOM being fully loaded and accessible should be placed at the end of the <body> tag to ensure all elements are available when the script runs.
Example:
<body>
  <!-- Page content -->
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // DOM is fully loaded and parsed
    });
  </script>
</body>

Performance Optimization:

To improve the perceived performance of a webpage, 
placing scripts at the end of the <body> allows the HTML content to be displayed without waiting for the scripts to load and execute.
Example:
<body>
  <!-- Page content -->
  <script src="performance-script.js"></script>
</body>

In many cases, a combination of both placements is used to balance performance and functionality:

Best Practices
Minimize Blocking:

Avoid blocking the rendering of the page by minimizing synchronous scripts in the <head>. Use defer or place scripts at the end of the <body> when possible.
Load Order:

Ensure that scripts that depend on each other are loaded in the correct order. Deferred scripts respect the order in the document, while async scripts do not.
Performance:

For better performance, consider using async for third-party scripts and defer for your own scripts that should run after the HTML parsing is complete.
DOMContentLoaded Event:

Use the DOMContentLoaded event to ensure scripts that manipulate the DOM are executed after the DOM is fully parsed.
*/