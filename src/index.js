import ReactDom from 'react-dom/client';
import "./index.css"

import Home from "./view/home/Home"
import About from "./view/about/About"
import Contact from "./view/contact/Contact"


const root = ReactDom.createRoot(document.getElementById('root'));

const currentpath = window.location.pathname;

if(currentpath=="/")
{
    root.render(<Home/>)
}
else if(currentpath=="/about")
{
    root.render(<About/>)
}
else if(currentpath=="/contact")
{
    root.render(<Contact/>)
}
else
{
    root.render(<h1>404 error</h1>)
}

