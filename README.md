
# My Blog Project

This project is a personal blog created using Next.js and Tailwind CSS. It features a blog layout with a sidebar for navigation, markdown content rendering, and responsive design.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Libraries Used](#libraries-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

# Navigate to the project directory
cd your-repo-name

# Install dependencies
npm install


-----------------------------------------------------------------------------------


* make sure you have github, node.js installed on your pc and cloned the repository
* Create `.env.local` file in root folder.
* Contents of `.env.local`:



```bash
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# email.js id and key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX

NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```


* get the necessary keys related to Email JS
* open terminal in root directory.


run
```bash
npm install --legacy-peer-deps
```



### usage

* now app is fully configured and you can start using this app using 

```bash
npm run dev
```


## ⚙️tech stack 

[![React JS](https://camo.githubusercontent.com/ff077b866cdc3fc2b0fa50ca6f8fa395451ffa625bc9c1133643b40e8afa2e2c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374 "React JS")](https://react.dev/ "React JS") [![Next JS](https://camo.githubusercontent.com/d497939090636f804984724017254c02d72c3b4c9d69976cfa4ad3159eae8ff4/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e657874 "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://camo.githubusercontent.com/34597c8135ed2d68f6dead5b7565c74d77946f6b199f7472661d54677c58a24a/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7473 "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://camo.githubusercontent.com/90821127892b2ab8fed54a30b62e3875250c25b0ff2b0466eade956773d27126/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7461696c77696e64 "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://camo.githubusercontent.com/9f11387f8a858c2bcd589f86a40979d2256eaa312a95f364d623ff61aec72670/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d76657263656c "Vercel")](https://vercel.app/ "Vercel")


## 📚libraries used
- - [PrismJS](https://prismjs.com/) for syntax highlighting
- [React Scroll](https://www.npmjs.com/package/react-scroll) for smooth scrolling
- React Icons for icons
- [Gray-Matter](https://github.com/jonschlinkert/gray-matter) for parsing front matter
- Remark for markdown processing
- [Remark-Parse](https://www.npmjs.com/package/remark-parse) for parsing markdown
- [Remark-Rehype](https://www.npmjs.com/package/remark-rehype) for converting markdown to HTML
- [Rehype-Stringify](https://www.npmjs.com/package/rehype-stringify) for stringifying HTML
- [Rehype-Prism](https://www.npmjs.com/package/rehype-prism) for syntax highlighting in HTML
- [Rehype-Slug](https://www.npmjs.com/package/rehype-slug) for adding slugs to headings
- [EmailJS](https://www.emailjs.com/) for sending emails from the client-side
- Framer Motion for animations
- [clsx](https://www.npmjs.com/package/clsx) for conditional classNames
- React Vertical Timeline Component for creating vertical timelines
- [React Hot Toast](https://react-hot-toast.com/) for notifications
- [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) for observing elements in the viewport
- [Next PWA](https://github.com/shadowwalker/next-pwa) for Progressive Web App support



## 💎features
- Responsive design
- Markdown support for blog posts
- Syntax highlighting with PrismJS
- Sidebar navigation for blog contents
- Smooth scrolling
- Light and dark mode support
- Email functionality with EmailJS
- Animations with Framer Motion
- Vertical timelines
- Toast notifications
- Intersection observer
- PWA support


