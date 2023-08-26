# remix-app-esm-starter

## Tech stack

- [DrizzleORM](https://orm.drizzle.team/) - Drizzle ORM
- [ESLint](https://eslint.org/) - Linting utility
- [Express](https://expressjs.com/) - Node.js web framework
- [Prettier](https://prettier.io/) - Code formatter
- [React](https://react.dev/) - React
- [Remix](https://remix.run) - React framework for building web apps
- [shadcn/ui](https://ui.shadcn.com/) - shadcn/ui
- [Supabase.com](https://supabase.com/) - Supabase for DB/Auth
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Zod](https://zod.dev/) - Zod

## Getting Started

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
