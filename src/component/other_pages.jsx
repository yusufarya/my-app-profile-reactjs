import Resume from '../pages/resume.jsx';
import Scrollbar from '../pages/notes/scrollbar.jsx';
import Structurefolder from '../pages/notes/structure_folder.jsx';

function Otherpages(props) {
    console.log(props)
    return (
        <> 
            {props.pages === '/resume' && <Resume />}
            {props.pages === '/scrollbar' && <Scrollbar />} 
            {props.pages === '/structure-folder' && <Structurefolder />} 
        </>
    )
} 

export default Otherpages