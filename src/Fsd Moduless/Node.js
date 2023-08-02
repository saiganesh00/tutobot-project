import React from 'react';
function NodeModule(){
    return(
        <div>
            <center><h1>Module-1</h1></center>
            <h1>Introduction to Node.js</h1>
            <p style={{ fontSize: 17 }}>
            Getting started guide to Node.js, the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it's mainly used to create web servers - but it's not limited to just that.
Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language.

In Node.js the new ECMAScript standards can be used without problems, as you don't have to wait for all your users to update their browsers - you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node.js with flags.
            </p>
            <h1>How to install Node.js</h1>
            <h3>1.NPM</h3>
            <p style={{ fontSize: 17 }} >{`The NPM – Node Package Manager is the default package manager for NodeJs. Basically, NodeJs is a JavaScript runtime environment, allowing developers to develop the scalable application in a given time.
NPM allows open-source web developers to share and borrow packages for app development. Also, it works as a command-line utility for the application for installing packages in the project, dependency management, and even version management.</p>
             <h3>Components of NPM</h3>
             <p> Website: You can find packages from the official NPM website for your project. Also, you can create and set up profiles to manage and access all types of packages.
<br/>2 Command Line Interface (CLI): To interface with NPM packages and repositories, the CLI runs from your computer's terminal.
<br/>3 Registry: It has a huge database of JavaScript projects and meta-data. Thus, it allows you to use any supported NPM registry. Also, you can utilize someone else’s registry as per their terms of use.
<br/>
Step 1: Download the Installer
Download the Windows Installer from NodeJs official website. Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.
Here, we are choosing the 64-bit version of the Node.js installer.
The LTS (Long-term Support) version is highly recommended for you. After the download of the installer package, install it with a double-click on it.
Now .msi file will be downloaded to your browser. Choose the desired location for that.
<br/>
Step 2: Install Node.js and NPM
After choosing the path, double-click to install .msi binary files to initiate the installation process. Then give access to run the application.
You will get a welcome message on your screen and click the “Next” button. The installation process will start.
Choose the desired path where you want to install Node.js.
By clicking on the Next button, you will get a custom page setup on the screen. Make sure you choose npm package manager , not the default of Node.js runtime . This way, we can install Node and NPM simultaneously.
You should have 143MB of space to install Node.js and npm features.
<br/>
The following features will be installed by default:

Node.js runtime
Npm package manager
Online documentation shortcuts
Add to Path

Bang! The setup is ready to install Node and NPM. Let's click on the Install button so hard!
<br/>
Step 3: Check Node.js and NPM Version
If you have a doubt whether you have installed everything correctly or not, let's verify it with “Command Prompt”.
Command Prompt window will appear on the screen.

To confirm Node installation, type node -v command.

To confirm NPM installation, type npm -v command.

And you don't need to worry if you see different numbers than mine as Node and NPM are updated frequently.
`}</p>
<h1>The V8 JavaScript Engine</h1>
<p>V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
V8 provides the runtime environment in which JavaScript executes. The DOM and the other Web Platform APIs are provided by the browser.</p>
<h1>Compilation</h1>
<p style={{ fontSize: 17 }}>JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.
JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.
Our applications can now run for hours inside a browser, rather than being just a few form validation rules or simple scripts.
In this new world, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript ready, once done it's going to be much more performant than purely interpreted code.</p>

<center><h1>Module-2</h1></center>
<h1>Node.js, the difference between development and production</h1>
<p style={{ fontSize: 17 }}>
  Node.js assumes it's always running in a development environment. You can signal Node.js that you are running in production by setting the NODE_ENV=production environment variable. <br/>
This is usually done by executing the command

export NODE_ENV=production

in the shell, but it's better to put it in your shell configuration file (e.g. .bash_profile with the Bash shell) because otherwise the setting does not persist in case of a system restart.
You can also apply the environment variable by prepending it to your application initialization command:

NODE_ENV=production node app.js

This environment variable is a convention that is widely used in external libraries as well.
Setting the environment to production generally ensures that

logging is kept to a minimum, essential level
more caching levels take place to optimize performance <br/>
For example Pug, the templating library used by Express, compiles in debug mode if NODE_ENV is not set to production. Express views are compiled in every request in development mode, while in production they are cached. There are many more examples.

You can use conditional statements to execute code in different environments:</p>

<p style={{ fontSize: 17 }}>
<pre>{`
  if (process.env.NODE_ENV === 'development') {
    // ...
  }

  if (process.env.NODE_ENV === 'production') {
    // ...
  }

  if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    // ...
  }`}
</pre>
For example, in an Express app, you can use this to set different error handlers per environment:

js
  {`
  if (process.env.NODE_ENV === 'development') 
  {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }

  if (process.env.NODE_ENV === 'production') 
  {
    app.use(express.errorHandler());
  }
  `}
</p>
<h1>Node.js with WebAssembly</h1>
<p style={{ fontSize: 17 }}>WebAssembly is a high-performance assembly-like language that can be compiled from various languages, including C/C++, Rust, and AssemblyScript. Currently, it is supported by Chrome, Firefox, Safari, Edge, and Node.js!<br/>

The WebAssembly specification details two file formats, a binary format called a WebAssembly Module with a .wasm extension and corresponding text representation called WebAssembly Text format with a .wat extension.</p>
<h3>Key Concepts</h3>
<p style={{ fontSize: 17 }}>
Module - A compiled WebAssembly binary, ie a .wasm file. <br/>
Memory - A resizable ArrayBuffer.<br/>
Table - A resizable typed array of references not stored in Memory.<br/>
Instance - An instantiation of a Module with its Memory, Table, and variables.<br/>
In order to use WebAssembly, you need a .wasm binary file and a set of APIs to communicate with WebAssembly. Node.js provides the necessary APIs via the global WebAssembly object.<br/>
</p>

<p style={{ fontSize: 17 }}>
    {`
    console.log(WebAssembly);
    /*
    Object [WebAssembly] {
      compile: [Function: compile],
      validate: [Function: validate],
      instantiate: [Function: instantiate]
    }
    */
    `}
</p>
<h1>
Generating WebAssembly Modules
</h1>
<p style={{ fontSize: 17 }}>{`
There are multiple methods available to generate WebAssembly binary files including:

Writing WebAssembly (.wat) by hand and converting to binary format using tools such as wabt
Using emscripten with a C/C++ application
Using wasm-pack with a Rust application
Using AssemblyScript if you prefer a TypeScript-like experience
Some of these tools generate not only the binary file, but the JavaScript "glue" code and corresponding HTML files to run in the browser.
`}</p>

<h1>How to use it</h1>
<p style={{ fontSize: 17 }}>{`
Once you have a WebAssembly module, you can use the Node.js WebAssembly object to instantiate it.
// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require('fs');

const wasmBuffer = fs.readFileSync('/path/to/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});`}
</p>
<h1>Overview of Blocking vs Non-Blocking</h1>
<p style={{ fontSize: 17 }}>This overview covers the difference between blocking and non-blocking calls in Node.js. This overview will refer to the event loop and libuv but no prior knowledge of those topics is required. Readers are assumed to have a basic understanding of the JavaScript language and Node.js callback pattern.</p>
<h3>Blocking</h3>
<p style={{ fontSize: 17 }}>
Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.
In Node.js, JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn't typically referred to as blocking. Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations. Native modules may also have blocking methods.
</p>
<h1>Concurrency and Throughput</h1>
<p style={{ fontSize: 17 }}>
  JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work. Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.
As an example, let's consider a case where each request to a web server takes 50ms to complete and 45ms of that 50ms is database I/O that can be done asynchronously. Choosing non-blocking asynchronous operations frees up that 45ms per request to handle other requests. This is a significant difference in capacity just by choosing to use non-blocking methods instead of blocking methods.</p>
        </div>
    )
}
export default NodeModule;