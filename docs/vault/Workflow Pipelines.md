## Code Change Pipeline

## Deployment Pipeline

When we want to publish our project there are multiple things we need to do.

### Self Hosted Version
1. Stitch all our files together into artifacts `npm run build`
2. Setup a web server
	1. Decide on which web server to use
	2. ensure it is updated with all the security patches
3. Upload the artifacts to the server
4. Have a machine that is on 24/7 running the web server and is connected to the internet
5. Monitor the machine:
	1. to ensure nothing breaks.
	2. to ensure it is fast enough to serve all of our users
	3. and update the Operating System with all the latest patches
	4. to ensure no malefactors hacks in and break stuff

### Managed solution

1. Create a repository on [GitHub](https://github.com/)
2. Connect repository to [Netlify](https://www.netlify.com/)
3. Watch our project being built and hosted on Netlify
4. Navigate to the returned URL

### Daily work

1. Improve your project page
2. Commit changes
3. Push them to GitHub
4. Lean back, relax and watch the automation do all the work

## Source Files
All the files that is part of the project

## Artifacts
The files resulting from transforming the source files into something that is optimized for delivering to the end user.

## Web Server
The computer that host your project and makes it available to the rest of the world.

Development:
	This is the development server
	`npm run dev`

Production:
	Where you upload the artifacts to
	GitHub Pages
	Netlify
	Vercel
