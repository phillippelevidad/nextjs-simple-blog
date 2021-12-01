# Next.js Simple Blog

This is a code-along I made from [Next.js by Example](https://www.udemy.com/course/nextjs-by-example), a best-selling course from Udemy by Mirko Nasato.

In this course, I learned to build web applications with [Next.js by Vercel](https://nextjs.org/), a framework built on top of React.

----------

## What I learned

* **Pre-rendering**, to make SEO-friendly applications (which React by itself is not)
* Running React code in the server vs in the browser
* **Routing and Navigation**, since Next.js has its own built-in routing system, which makes it easier to add new pages/routes by simply creating your components in a `page` folder
* **Styling with the [Styled JSX](https://github.com/vercel/styled-jsx) lib**, which provides scoped styling capabilities
* **Loading and processing markdown files** in the server, in order to build the post links and pages for the blog
* **Adding client-side functionality on top of pre-rendered pages** via Hydration (the the process of attaching React listeners to already-existing html dom nodes)
* **Feature detection** for code that runs on both the server and the client (e.g. localStorage is available in the browser, but not in the server, and the app might need to distinguish)

On top of that, I also learned about different strategies for deploying a Next.js application, e.g. to platforms such as Vercel and Netlify, custom/own Node.js servers such as Digital Ocean and Amazon EC2, and fully-static websites hosted at Amazon S3 for reduced costs.

----------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
