### READ ME!

## to start

- run `npm install` to make sure you have required depedencies.

## .env

- you need to get .env from me to be able to connect to the DB. template is in `.env.example`

## frontend

Some useful information for frontend.

- this project use Next.js, routing of this project is directory routing(default of Next.js). in `/app` directory `pages.tsx` is your home page.
  `/about` = `homeurl.com/about`
  `/cafes` = `homeurl.com/cafes`

`page.tsx` in each directory act as `index.html`

- by default all of the component of Next.js is server component, this means you can't use hooks in the component nor does client interaction like `useState` or `useReducer`.
  if you want to use those, you need to turn that component into client component by add `use client` at the TOP of the file.

- this project use tailwind.
- if you have asset like images, it goes in `/public`.

## backend

- database is postgres. host on Vercel.
- DO NOT RUN `seed` COMMAND. everytime that you run will cost DB operation to happen, and we have limited amount.

## Anton

there are two places that you need to look into. in `/app/lib` there are two samples file for you to create schema. `definitions.ts` contains template of your data, it's where you define types of your data.

`placeholder-data.js` contain real data that you want to insert into DB.
