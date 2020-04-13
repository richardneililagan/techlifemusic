# techlifemusic

My personal site and blog, powered by [Gatsby][1].

---

## About

This codebase uses [Gatsby][1] to generate a static site that uses React
based on content you give it. Since it's a static site, it doesn't need to have
a full-fledged server and database to run your site (like how Wordpress would),
and instead will run in your visitor's browser as a client-side frontend webapp.

This site is a significantly modified version of [Lumen][5], by Alexander Shelepenok.
Aside from the theming changes, some of the stuff I've changed are:

- using [MDX][6] instead of plain [Markdown][7] for then content pieces,
- adding a bit more support for highlighted code blocks,
- improvements in the use of semantic HTML elements

### Posts and Pages

We use [Gatsby][1] to **automatically** parse and convert plaintext files to static pages.
Individual blog posts and standalone site pages are both located in the `/content/posts`
and `/content/pages` directories respectively.
The files are just in plain [Markdown][7] (or, more accurately, [MDX][6]),
which allows you to write your posts in a very human-readable format --- ergo, a format
you can read even without running it through a processor (like how this site is).

> **To add a new post**, just create a new `.md` file in `/content/posts`.

> **To add a new page**, add the page's `.md` file in `/content/pages`, and register the page
> in `/gatsby/create-pages.js` so that Gatsby will know how to properly wire it up in your
> site structure.

## Usage

### Prerequisites

You'll need to have both Node.js and Gatsby in your devenv.

```
node -v
gatsby -v
```

To run a local development server, run `npm run develop`.
(Script cleans the local cache, and runs `gatsby develop` for you.)

To deploy into production, you can either do `npm run build`,
and deploy the build artifacts manually to your platform of choice,
or you can link your git repository to a managed platform
that can run CI/CD for you automatically.

Some good examples are:

- [AWS Amplify][3]
- [Netlify][4]

---

[@techlifemusic][2]

[1]: https://gatsbyjs.org
[2]: https://twitter.com/techlifemusic
[3]: https://aws.amazon.com/amplify/console
[4]: https://netlify.com
[5]: https://github.com/alxshelepenok/gatsby-starter-lumen
[6]: https://mdxjs.com/
[7]: https://daringfireball.net/projects/markdown/syntax
