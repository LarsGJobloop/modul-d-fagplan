## Code as Modules

## Pros
- Reusability
- Smaller components are easier to reason about
- Problems can be divided and each team can work on them independently
- Modules encloses over variables that should be internal

## Cons
- Code does not have easy access to every other piece of code
- Complexity rises with more pieces
- Complexity to setup interaction between modules
- Two versions of code, Source Code & Build Artifacts

## More problems
- How should the modules be combined - ES6 Modules
- Web Sites / Application consists of more than just JavaScript files (HTML, CSS)

## Build System<br>*- ViteJS*

### Setting up a project
  ```sh
  npm create vite@latest
  ```

### Starting the development server
```sh
npx vite
```
A web server should now be serving your application to your local computer.
See the output in the terminal for which address it is hosted on.

Standardize the development process, by setting up a script in `package.json`
```json
{
	"scripts": {
		"dev": "vite"
	}
} 
```

To start up the development server now just run
```sh
npm run dev
```

###  Run the build step
```sh
npx vite build
```

The compiled files should (by default) be put into a new folder named `dist`

Standardize the build step, by setting up a script in `package.json`
```json
{
	"scripts": {
		"dev": "vite",
		"build": "vite build"
	}
} 
```
 
 To create a set of new build artifacts run
 ```sh
 npm run build
 ```

## Paradigms: Your Pathways to Innovation

Think of paradigms as diverse lenses through which you can view and tackle development challenges. They're like different colors on an artist's palette, each offering a unique perspective and potential for innovation. Here's a brief glimpse of some prominent paradigms that await your exploration:

1. **Imperative Paradigm**: This is your bread and butter – the essence of coding. In this paradigm, you'll write step-by-step instructions to explicitly dictate how a program should achieve a certain outcome. It's like giving direct orders to your code, making it a great starting point to understand the basics of logic and structure.

2. **Declarative Paradigm**: Embrace your inner poet – with the declarative paradigm, you'll focus on describing what you want, not how to get it. This approach simplifies code by abstracting complex processes, enhancing readability, and making maintenance a breeze. Dive into frameworks like React and Vue.js to experience the power of declarative programming.

3. **Component-Based Paradigm**: Think of this as designing with Lego bricks. Break down your user interface into smaller, reusable components, each responsible for a specific part of the UI. Vue.js, React, and Angular thrive on this paradigm, enabling you to craft intricate interfaces with ease.

4. **Object-Oriented Paradigm**: Enter a realm where everything is an object – like building blocks with unique attributes and behaviors. In this paradigm, you'll organize your code into objects that interact with each other, fostering scalability and maintainability. JavaScript's class-based approach or the prototype-based model are excellent examples.

5. **Responsive Design Paradigm**: Here, you'll cater to the myriad devices and screen sizes that users employ. The responsive design paradigm advocates for creating adaptable layouts and styles, ensuring your websites and apps shine across various platforms.

6. **Mobile-First Paradigm**: With mobile devices dominating the digital landscape, focusing on the mobile-first paradigm is essential. Craft your designs and code to prioritize mobile users, then expand to larger screens – ensuring a seamless experience for all.

7. **Functional Paradigm**: Imagine coding as assembling a puzzle, where each piece is a self-contained function. In the functional paradigm, you'll treat functions as first-class citizens, enabling you to create more modular, reusable, and reliable code. This approach encourages thinking in terms of transformations and immutability.

8. **Event-Driven Paradigm: Unleash Interactivity** Imagine your code responding to user actions like a well-choreographed dance. That's the essence of the event-driven paradigm. In this approach, your code listens for and responds to various events triggered by user interactions, like clicks, keystrokes, or form submissions. Think of it as a conversation between your code and the user, where each action leads to a specific reaction.
   
9. **Reactive Paradigm: Embrace the Flow** Imagine a river that flows naturally, adjusting to its surroundings without external intervention. The reactive paradigm brings a similar flow to your code. In this approach, your application's state becomes the driving force, and changes in that state automatically trigger updates throughout the interface. This is the backbone of reactive frameworks like React and Vue.js.