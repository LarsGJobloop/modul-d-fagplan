## Routes

To keep things organized we humans like to chop up large bits into smaller digestible bits.
This is quite common in software development and we have seen it when we approach applications as consisting of multiple components. The same is done for users of our application. Instead of having everything on a single page, we split it up into multiple pages.

This is called *routing* due to how it's divided along the URL paths `www.example.com`, `www.example.com/login`, `www.example.com/projects`, etc.

For any one application we are usually only concerned with the part of the URL after the domain name `www.example.com/contact` -> `/contact`. 

## Defining Routes

```jsx
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'

function LandingPage() {
	return (
		<>
			<header>
				<h1>Landing Page</h1>
			</header>

			<main>
				<h2>This is the landing page</h2>
			</main>
			
			<footer>
				<h2>&copy; Lars Gunnar</h2>
			</footer>
		<>
	)
}

function ContactPage() {
	return (
		<>
			<header>
				<h1>Contact Page</h1>
			</header>

			<main>
				<h2>Here is all contact information</h2>
			</main>
			
			<footer>
				<h2>&copy; Lars Gunnar</h2>
			</footer>
		<>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	)
}
```

## Layouts

```jsx
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet
} from 'react-router-dom'

function LayoutBase() {
	return (
		<>
			<header>
				<h1>Layout Example</h1>
			</header>

			<main>
				<Outlet />
			</main>
			
			<footer>
				<h2>&copy; Lars Gunnar</h2>
			</footer>
		<>
	)
}

function LandingPage() {
	return (
		<>
			<h2> This is the landing page</h2>
		<>
	)
}

function ContactPage() {
	return (
		<>
			<h2> This is the contact page</h2>
		<>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutBase />}>
					<Route index element={<LandingPage />} />
					<Route path="contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
```

## Nested Layouts

```jsx
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navlink,
} from 'react-router-dom'

function AdminPanel() {
	return (
		<>
			<header>
				<h2>Welcome Administrator</h2>
				
				<nav>
					<Navlink to="/">Admin</Navlink>
					<Navlink to="sales">Sales</Navlink>
				</nav>
			</header>

			<section>
				<Outlet />
			</section>
		<>
	)
}

function Overview() {
	return (
		<>
			<h2>Here is your admin panel</h2>
		<>
	)
}

function Sales() {
	return (
		<>
			<h2>Here are this months sales</h2>
		<>
	)
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutBase />}>
					<Route index element={<LandingPage />} />

					<Route path="admin" element={<AdminPanel />}>
						<Route index element={<Overview />} />
						<Route path="projects" element={<Sales />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
```

## Wildcards and redirects

```jsx
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LayoutBase />}>
					<Route index element={<LandingPage />} />

					<Route path="admin" element={<AdminPanel />}>
						<Route index element={<Overview />} />
						<Route path="projects" element={<Sales />} />
						
						<Route path="*" element={<PageNotFound />} />
					</Route>
				</Route>
				
				<Route path="*" element={<Navigate to="/" replace />}>
			</Routes>
		</BrowserRouter>
	)
}
```