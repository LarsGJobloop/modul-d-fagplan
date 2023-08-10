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
- How should the modules be combined
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
- Standardize the development process, by setting up a script in `package.json`
```json
{
	scripts: {
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
- Standardize the build step, by setting up a script in `package.json`
```json
{
	scripts: {
		"dev": "vite",
		"build": "vite build"
	}
} 
```
 To create a set of new build artifacts run
 ```sh
 npm run build
 ```

## Addendum

There are many thoughts and solutions for exactly how each of these modules should be divided. This is something that is closely related to the larger design of the application.

Some common patterns:
- **Functional Decomposition:**
  Divide the application into modules depending on hardware features
- **Layered Architecture:**
  Split according to the aspects of the application.
  Presentation Layer, Business Logic Layer, Data Access Layer
- **Modular by Feature:**
  Split according to features / user stories
  "User should "
- **Domain-Driven Design:**
  Split according to perspective, Customer Support, Engineering, Administration
- **Event-Driven Architecture:**
  Divide the application into events and functions that handles those events
- **Plugin or Extension Architecture:**
  Create a framework with hooks, to allow modules to be defined later and plugged into the system.
- **Aspect-Oriented Programming:**
  Extract logic which applies to multiple parts into separate modules. Logging, Security, Authentication, Authorization