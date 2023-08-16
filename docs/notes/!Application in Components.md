# GUI Components

## Content

- [Build Systems](#build-systems)
- [Stateless Components](#stateless-components)
- [Event Handling](#event-handling)
- [Stateful Reactive Components](#stateful-reactive-components)
- [Asynchronous Code](#asynchronous-code)
- [Contextual and Application State](#contextual-and-application-state)
- [Routing](#routing)
- [Workflow Pipelines](#workflow-pipelines)

## [Build Systems](./Build%20Systems.md)
Short introduction to build systems, with focus on [ViteJS](https://vitejs.dev/)

### Prerequisite
NodeJS and NPM installed, [NodeJS Homepage](https://nodejs.org).
Commands for checking that everything is installed:
1. `node --version`
2. `npm --version`
Any NodeJS version greater than 16 is fine. [NodeJS release schedule](https://github.com/nodejs/release#release-schedule)

## [Stateless Components](./Stateless%20Components.md)
Using React for creating components, adding variations. How to make containers and generating lists.
  
## [Event Handling](./Event%20Handling.md)
Setting up and using functions for event handling.

## [Stateful Reactive Components](./Stateful%20Reactive%20Components.md)
Handling components that changes over time. Transitions between multiple states.
  
## [External Systems](./Asynchronous%20Code.md)
React makes use of an internal loop for keeping track of when and what to update. So when we need to interact with system outside of React we need a way to perform code outside that loop. Typically use cases are:
- Communicating with another program
  Be that a server somewhere else or just another program running on the local machine
- Browser, or other, Modules that you want to load and unload in sync with the components life cycle.
  [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) is a simple example

## [Contextual and Application State](./Contextual%20and%20Application%20State.md)
State which belongs to a single component is handle by an internal React hook.
Other forms of state might not belong to a single component but to a group of components, like which part of a multi tab page is currently active. You also have state which is part of the whole application, like who is currently logged in.

React provides the Context API for state that is shared between components and that seldom changes.
If you have state that changes frequently and you want access to from multiple parts of your application you should try one of the more complex statemanagment libraries.
- [Zustand](https://github.com/pmndrs/zustand)
- [Redux](https://react-redux.js.org/)

## [Routing](./Routing.md)

Another variation over our application state is where the user currently is, and also where the user was before. This is manifested as the current page the user is on and the history of previous pages the user has visited. It is also state that is visible in the URL and could be shareable.

React does not provide any inbuilt interface for interacting with that state and constructing our own, decent, abstraction for interacting with that is non-trivial. We will be using a separate library for that functionality:
- [React Router](https://reactrouter.com/)

## [Workflow Pipelines](./Workflow%20Pipelines.md)
- Code Change Pipeline
- Deployment Pipeline