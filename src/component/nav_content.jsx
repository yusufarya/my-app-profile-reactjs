
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Project from '../pages/project.jsx';
import Articles from '../pages/articles.jsx';
import Contact from '../pages/contact.jsx';

function NavContent(props) {
    return (
        <> 
            {props.tabName === 'home' && <Home />}
            {props.tabName === 'about' && <About />}
            {props.tabName === 'articles' && <Articles />}
            {props.tabName === 'projects' && <Project />}
            {props.tabName === 'contact' && <Contact />}
        </>
    )
} 

export default NavContent