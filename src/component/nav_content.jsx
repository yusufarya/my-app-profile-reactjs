
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Project from '../pages/project.jsx';
import Articles from '../pages/articles.jsx';
import Notes from '../pages/notes.jsx'; 

function NavContent(props) {
    return (
        <> 
            {props.tabName === 'home' && <Home />}
            {props.tabName === 'articles' && <Articles />}
            {props.tabName === 'notes' && <Notes />}
            {props.tabName === 'projects' && <Project />} 
            {props.tabName === 'about' && <About />}
        </>
    )
} 

export default NavContent