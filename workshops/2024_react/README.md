# React & typescript Training

* VS Code
    * plugins
        * React
        * ES7+ React/Redux/React-Native snippets
        * evtl
            * Simple React Snippets
            * Typescript React code snippets
        * open in browser

* create project: `npm create vite@latest`

## JavaScript

[day-1-training](day-1-training)

* Strict Mode: Strict javascript
    * renders 2 times, first time for validation
* [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) (JavaScript XML, formally JavaScript Syntax eXtension): java script & html
    * JSX className <=> HTML class
    * JSX style=({backgroundColor:"red""}) <=> HTML background-color="red"
    * JSX htmlFor="..." <=> HTML for="..."

* Layout:
    * src => whole application
        * assets -> images & co
        * index.html -includes-> main.jsx -includes-> App.jsx
    * package.json
        * dependencies
        * `"type": "module"` -> makes imports possible
        * `"scripts"`
            * shorcuts for commands, like make
        * `"dependencies"`
        * `"devDependencies"`
            * linting
            * `"@types/react"` -> type script definitions for IDE
            * `"@types/react-dom"` -> type script definitions for react-dom
* Components (like App)
    * CamelCase for naming
    * function
    * `export default App`
    * App.css => example for css file for component

* `npm run dev`

* Virtual DOM
    * gets changes first
    * sync with live DOM
        * only the parts that changed are rendered
    * for development & also in production (e.g. state changes) 

* suggested `src` Layout:
    *  assets
    * components -> fine granular components
    * layouts -> page layouts (e.g. header / footer)
    * pages -> contains views / components
    * view -> grouping of component


* Fragment: `<>` ... `</>`

* Styling
    * https://css-tricks.com/snippets/css/a-guide-to-flexbox/

* Props:
    * `const MainLayout = ({children}) => {`
    * `const MainLayout = (props) => {`
    * direction: top -> down
    * Rule of thumb: avoid more than 3 "drillings"

* css import
    * import `abc.css` -> will be included in the head of the html page (content included within script tag on the page)
    * Modul-Import
        * `import styles from '../styles/AboutUs.module.css'`
        * ` <div className={styles.viewOuter}>`
        * => automatically minified
        * => not part of HTML code, loaded as additional resource where needed
    * inline style
        * JSX to HTML conversion

* react router
    * `npm install react-router-dom`
    * https://reactrouter.com/en/main
        * BrowserRouter
            * https://reactrouter.com/en/main/router-components/browser-router
            * https://reactrouter.com/en/main/routers/create-browser-router
        * createRoutesFromElements
            * https://reactrouter.com/en/main/utils/create-routes-from-elements
    * `import { ... } from "react-router-dom"`
    * index route
    ```
    <Route path="/">
        <Route index element={<Homepage/>}/>
    </Route>
    ```
    * include `<RouterProvider router={router} />` in `main.jsx`
    * use Layout
        * `<Route path="/" element={<MainLayout/>}>`
        * in Layout: `<Outlet/>`

* handling state
    * `import { useState } from 'react'`
    * ...
    * `const [active, setActive] = useState(false);`
    * each component has dedicated state
    * set... will change the state and force the component (and only this component) to re-render

## Typescript

[day-2-training](day-2-training)

* to reduce warnings include `'react/prop-types': [disabled],` in `.eslintrc.cjs`
* .ts / .tsx files (pendant to js(x))
* `npm run build`
    * fails on unused imports etc.


* useEffect => [synchronize a component with an external system](https://react.dev/learn/synchronizing-with-effects)
    * e.g. manage calls to be executed only when needed
    * `import { useEffect } from "react"`
    * `AbortController#abort()`  -> for cancelling effects etc., used e.g. in effect cleanup
        * https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort

* forms:
    * merge existing values with changed ones
    ```
        function handleChange(e:any) {
            setPostData({ ...postData, [e.target.name]: e.target.value})
        }
    ```
    * `useRef` usually has better performance compared to custom handler        

* Typescript type
    * Optional type:
        * `text?: string`
    * Type Unions with `|`
    * arrays with min & max item count example:
        * `padding: [number, number?, number?, number?]`
    * anonymous function returning void
        * `action: () => void`
    * any react node / rendarable content:
        * `children: React.ReactNode`
    * any react element:
        * `children: React.ReactElement`
    * type vs interface: ?


* local storage
    * `localStorage.setItem("userState", JSON.stringify(...)`
    * `localStorage.removeItem("userState")`

* Navigation / Redirects
    * `return <Navigate to="/"/>`
    * or
        * `import { useNavigate } from "react-router-dom"`
        * `const navigate = useNavigate()`
        * `navigate("/")`

* useContext
    * https://react.dev/reference/react/useContext
    * `createContext()`



## Sidenotes

* https://jsonplaceholder.typicode.com/
    * https://jsonplaceholder.typicode.com/users
    * https://jsonplaceholder.typicode.com/guide/
* Formik: library für forms
    * https://formik.org/docs/overview
* Zustand.js: altnerative to redux
* Check:
    * react hooks
        * helper functions that can trigger re-rendering and modify appliaction state
    * type vs interface
    * `export const UserLoggedInContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null)` => how to avoid null? (see MainLayout.tsx )