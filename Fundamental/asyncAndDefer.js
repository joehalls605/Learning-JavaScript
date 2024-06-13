/*
Async:
When you add the async attribute to a <script> tag in HTML, it allows the browser to load and execute the script asynchronously, as soon as it's available, without blocking the HTML parsing. However, the scripts are executed in the order they are downloaded, which means they may not execute in the order they appear on the page.
Example:
htmlCopy code<script src="script1.js" async></script>
<script src="script2.js" async></script>

Defer:
When you add the defer attribute to a <script> tag, the browser will download the script in parallel with parsing the HTML, but it will execute the script only after the HTML parsing is complete. Scripts with the defer attribute are executed in the order they appear on the page.
Key differences:

async scripts are executed as soon as they're downloaded, in no particular order.
defer scripts are executed in the order they appear on the page, but only after the HTML parsing is complete.

When deciding whether to use async, defer, or including the JavaScript code directly in a separate .js file, you should consider the following factors:
Using async or defer:
You would typically use async or defer when you have external JavaScript files that need to be loaded from a different source (e.g., a CDN or a different server). These attributes help control the loading and execution behavior of those external scripts.
Using async:

When the script is independent and doesn't need to interact with the page content.
When the script doesn't rely on any other scripts or resources.
When you want the script to be executed as soon as it's downloaded, without blocking the HTML parsing.
Examples: Analytics scripts, third-party scripts, ads, etc.

Using defer:

When the script needs to access or modify the DOM.
When the script relies on the HTML being fully parsed and loaded.
When you want to maintain the order of script execution.
Examples: Scripts that manipulate page elements, initialize libraries, etc.

Including JavaScript directly in a .js file:
You would typically include JavaScript code directly in a separate .js file when:

The code is part of your application's core functionality and needs to be bundled with the rest of your application.
You want to separate your JavaScript code from the HTML for better organization and maintainability.
You want to take advantage of module systems (e.g., ES6 modules or CommonJS) for better code organization and dependency management.
You plan to use a build tool or bundler (e.g., Webpack, Rollup, or Browserify) to optimize and package your JavaScript files.
*/