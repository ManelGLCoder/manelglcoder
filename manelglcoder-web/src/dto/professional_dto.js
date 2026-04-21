
import tc_logo from '../assets/triple-cherry/logo.avif'
import Git from '../assets/logos/git_icon.svg'
import SourceTree from '../assets/logos/sourcetree_icon.svg'
import Intellij from '../assets/logos/intellij_icon.svg'
import Kotlin from '../assets/logos/kotlin_icon.svg'
import Jira from '../assets/logos/jira_icon.svg'
import Confluence from '../assets/logos/confluence_icon.svg'
import tc_galley_1 from '../assets/triple-cherry/slots_1.avif'
import tc_galley_2 from '../assets/triple-cherry/slots_2.avif'
import tc_galley_3 from '../assets/triple-cherry/slots_3.avif'
import tc_galley_4 from '../assets/triple-cherry/slots_4.avif'
const TRIPLE_CHERRY = {
    title: 'Desarrollo Web Slots - TRIPLE CHERRY',
    logo: tc_logo,
    period: 'Feb 2023 - Sep 2024',
    companyDes: 'TRIPLE CHERRY es una empresa de desarrollo de slots de navegador situada en Valencia.',
    rol: 'Front-End Developer',
    tasks:[
        '+ Lógica del servidor:',
        '- Lógica de la slots, lectura de las matemáticas y su consecuente implementación de los cálculos y lógica de las partidas.',
        '- Sistema de mensajes que se enlaza con el cliente',
        '- Comprobaciones para detectar jugadas sospechosas y evitar modificación por parte del cliente',
        '- Implementación de features',
        '+ Lógica del cliente:',
        '- Implementación de la parte visual de la slot​',
        '- Implementación del comportamiento del cliente',
        '- Sistema de mensajes que se enlaza con el servidor',
        '+ Solución de bugs',
        '+ Documentación',
        '+ Testeo de las slots previo a las subidas a producción',
    ],
    links: [{url: 'https://www.3cherry.com/our-slots/',  text:'DEMOS'}],
    tools:[
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
        {src:Intellij, alt:'Intellij Idea Icon'},
        {src:Kotlin, alt:'Kotlin Icon'},
        {src:Jira, alt:'Jira Icon'},
        {src:Confluence, alt:'Confluence Icon'},
    ],
    gallery: [
        {src:tc_galley_1, alt:'Slots 1'},
        {src:tc_galley_2, alt:'Slots 2'},
        {src:tc_galley_3, alt:'Slots 3'},
        {src:tc_galley_4, alt:'Slots 4'},
    ]
}

import ws_logo from '../assets/win-system/logo.avif'
import CSharp from '../assets/logos/csharp.svg'
import VisualStudio from '../assets/logos/visualstudio_icon.svg'
import ws_galley_1 from '../assets/win-system/slot_1.avif'
import ws_galley_2 from '../assets/win-system/slot_2.avif'
import ws_galley_3 from '../assets/win-system/slot_3.avif'
import ws_galley_4 from '../assets/win-system/slot_4.avif'
const WIN_SYSTEMS = {
    title: 'Desarrollo Sofware Slots - Win Systems',
    logo: ws_logo,
    period: 'Jun - Dic 2022',
    companyDes: 'Win Systems es una empresa de desarrollo de slots físicas de casinos situada en San Cugat del Vallès, Barcelona.',
    rol: 'Game Developer (FRONT END)',
    tasks:[
        '- Desarrollo de cliente de las slots',
        '- Implementación de nuevas features',
        '- Búsqueda y solución de bugs',
        '- Docmentación'],
    links: [{url: 'https://winsysgroup.com/es/slot-games/',  text:'JUEGOS'}],
    tools:[
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
        {src:VisualStudio, alt:'Visual Studio Icon'},
        {src:CSharp, alt:'C# Icon'},
        {src:Jira, alt:'Jira Icon'},
        {src:Confluence, alt:'Confluence Icon'},
    ],
    gallery: [
        {src:ws_galley_1, alt:'Slot 1'},
        {src:ws_galley_2, alt:'Slot 2'},
        {src:ws_galley_3, alt:'Slot 3'},
        {src:ws_galley_4, alt:'Slot 4'},
    ]
}

const PROFESSIONAL_DATA = [TRIPLE_CHERRY, WIN_SYSTEMS]

export default PROFESSIONAL_DATA