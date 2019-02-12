# learning-ReactJS
This project contains several sub-projects showing some ReactJS_ capabilities, from the basic ones to more advanced, following some tutorial on the Inernet (links will be included when possible).

---
**IMPORTANT:**

**The "learning-ReactJS" itself is not a project, is only a folder that groups all the sub-projects together. Since the number of this small projects might grow over time, I've decided to use this way instad of createing an independent repository for each one of them.**

So, the most efficeinte way to work with the content is this:

1. Clone the whole repository (the "learning-ReactJS" folder). This will download all the subfolders containing the inidividual subprojects. 

2. Go to the subproject you wanna work with, and type the following in the console: `npm install`. This will install all the dependencies. These dependencies will be stored in some folders (like _/node_modules_ whihch are _excluded_ from the git _pull/push_ operations.)

3. Type `npm start` in the console. that's it!

---

A good tutorial to get started with _RactJS_ is [30 Days of React](https://www.fullstackreact.com/30-days-of-react/day-1/), where you can learn from the basis, up to developing a full working _ReactJS_ application.

> The source code for all the examples in the *30 Days of React* tutorial are available in GitHub [here](https://github.com/fullstackreact/30-days-of-react)


## Basic concepts

Links to useful sites, please check them out:
> [What is ReactJS?](https://www.fullstackreact.com/30-days-of-react/day-1/)
> 
> [What is JSX?](https://www.fullstackreact.com/30-days-of-react/day-2/)


## Basic example

> This example is a slightly variation of the example show in the following tutorial: [30 Days of React - Day 3](https://www.fullstackreact.com/30-days-of-react/day-3/)
 
This example is stored in the _/hello-world_ folder. It shows a very simple _ReactJS_ application. Here, we are not using any _Developemnt Environment_, and we are importing the _Reat_ Libraries directly in our web page. We are not using any king of packaging either, so we'll need to manually import all the javascrit libraries we need. 

* _index.html_ example shows an example where we define 2 different _React_ components, both consisting of a *h1* HTML tag containig some text. The first  example uses a _JSX_ extension, the second one uses a _React_ declaracion.


## Settig up _ReactJS_ development environment from scratch.

Real-life _React_ applications are not developed the way explained in the previous _HelloWorld_ example. Instead, a real _ReactJS_ Application has the following characteristics:

* It uses a _Development Environment_ in order to automate several tasks, like declaring and downloading JS dependencies.
* It creates a single-page application and all the _javascript_ code is pacakges into a single file. so, from the client/browser perspective, all the code is contained in a singel file. From the developer perspective thought, the code is broken down into several files, splitting the logic into different components.

**Tools needed for developing React Applications:**
First, we need to install _Node.js_ and _npm_, which is the _Node package manager_. We'll use _Node_, not to develop a Server-side applications, but to use it as a _package manager_, to manage our dependencies ina neasy way (similar to _maven_ or _gradle_ in _Java_).

### Installing _Node.js_ and _npm_
Instructions for Mac OS:

 1. Open the Terminal app and type `brew install node`.
 2. Sit back and wait. Homebrew downloads some files and installs them. And that’s it.

To make sure you have Node and NPM installed, run two simple commands to see what version of each is installed:

 * To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this `v0.10.31`.
 * To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this `1.4.27`

### An overview of the Components needed in a ReactJS application
A_REact_ application is composed of at least these 3 different components:

* React: The Javascript _React_ libraries
* babel: A component that translates new versions of Jvascript in previous versions, compatible with most compiles/browsers
* webpack: A package that (in "compilation" time), takes all the source files and crates a bundle package, putting all of them together in a single file (js files, css, etc). An aplication developed using "webpack" is more compact. In a tyical application developed with "webpack" there is usually only one Javacript import, which in turn imports the resto fo source files. This library also makes possible to _import/reference_ css files into our _js_ files.
* On top of the prevous thre ones, we are using _Node_ as our package manager (Called _npm_), same way as _maven_ or _gradle_ works for a _Java_ project.  The configurtion file in this case is called _package.json_.


Even though is possibel to set up and confgure all these components from scratch, the most common way is to make use of some pluging that takes care of putting them all together. In this case we are using *crate-react-app*:

### Creating a Web app using _create_react_app_

First, we need to install the plugin:
```
$ npm install -g create-react-app
```

> The instalaation of the plugin is *one-time* operation.

Then, we can verify that the installation is working fine:

```
$ create-react-app --version
create-react-app verion: 1.4.3
```

If everything is properly installed, we can create our first _React_ app:
```
$ create-react-app hello-react
```

and then go to the `/hello-react` flder and type 'npm start`. This will start the development server.

> From this moment moving forward, all the examples will be developed using the *create_reat_app* plugin.


## Timeline components project

This project is an example of a_React_ application, using the *create-react-app* plugin.

> This project is a modified version of the tutorial from the following pages:
> [Complex Components](https://www.fullstackreact.com/30-days-of-react/day-4/)
> [Data-Driven](https://www.fullstackreact.com/30-days-of-react/day-5/)

Go to the links above for references. Some Notes about the changes made with respect to the original tutorials are highlighted below:

* The *CSS* wth all the styles for the Componentes in this project has been downloaded to _local_ and stored to the folder _/src/css/timeline.css_.
* The _FontAwesome_ libraries hae been also downloaded into the _src/css/font-awesome-4.7.0_ folder.
* The Components in this projects provided an example of how different visual elements can be broken down into individual _React Components_. The componenets which name ens with "Data", are alternative version of these components (and some additional ones) which take their data from the _properties object, instrad of hardcoding it.

## Clock

This Project imple,nets some _React_ features:

* We use an _State_, to store internal information in the Components, making it a _stateful_ Component.
* We inject some code in the _Hooks_ provided by _React_ to add functionality in certain points in the Component lifecyle.
* We show how changing the State of the object will make it be rendered again. In this case, we set up a timer which updates the time, so the clocks renders again the time on the screen. This timer is set up before the Component is "mounted" (using here one of the _React HOOKS_).
* We add some interactivity: The clocks contains a form, which can select the "format" used to display the Time. This form is implemente in a _Child_ Component, and when this form is changed, the format selected is used to update the state of the _parent_ (the clock itself), so its rendered again. For the _Child_ to be able to invoke a function in the _parent_, we need to pass a _callback_ function to the _Child_ in the _props_ object (using a property called here "onchange").


> This project is initialy based on the one here: [State](https://www.fullstackreact.com/30-days-of-react/day-6/)
> 
> More info about the _React Hooks_ here: [An introduction to HOOKS in React](https://www.fullstackreact.com/articles/an-introduction-to-hooks-in-react/)

## hello-redux
This project implements a list of Feed-news, and a method to archive each list, so its not visible anymore. 
It uses _React_ + _REDUX_, as a middleware for _state management_.

> This project is based on the (great) tutorial stored here: [React Redux Tutorial for Beginners[2018]](https://www.robinwieruch.de/react-redux-tutorial/)

