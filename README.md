# Myorg

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

**Smart, Fast and Extensible Build System**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Getting started

Run `npx create-nx-workspace@latest` to generator an workspace

Workspace name (e.g., org name)     myorg
What to create in the new workspace angular
Application name                    todos
Default stylesheet format           CSS

Run `ng g @nrwl/angular:app my-app` to generate an application.

Run `npx nx serve my-app` to start my-app app

Run `npx nx e2e my-app-e2e --watch` to run automation test

Run `npm install --save-dev @nrwl/nest` to add the dependency

Run `npx nx g @nrwl/nest:app api --frontendProject=my-app` to create a NestJs application

Run `npx nx serve api` to start my-app-api

Run `npx nx g @nrwl/workspace:lib data` to create a lib

Run `npx nx graph` to view graph