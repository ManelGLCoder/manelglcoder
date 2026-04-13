import FolderButton from "../buttons/FolderButton"
import FileButton from "../buttons/FileButton"
import ContactButton from "../buttons/ContactButton"
import OldestProjectButton from "../buttons/OldestProjectButton"

import FolderWindow from "../windows/FolderWindow"
const Desktop = () =>{
    return(
        <div className={`flex-1 grid grid-cols-12 grid-rows-8`}>
            <FolderButton name={'Profesional'} row={1} col={1}/>
            <FolderButton name={'Proyectos'} row={2} col={1}/>
            <FileButton name={'SobreMi'} row={3} col={1}/>
            <ContactButton name={'Contactar'} row={4} col={1}/>
            <OldestProjectButton name={'Proyectos Antiguos'} row={8} col={1}/>

            <FolderWindow title={'Profesional'}/>
        </div>
    )
}

export default Desktop