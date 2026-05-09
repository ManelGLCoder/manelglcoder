
import cbfw_logo from '../assets/code-bcn-first-warrior/logo.png'
import Git from '../assets/logos/git_icon.svg'
import SourceTree from '../assets/logos/sourcetree_icon.svg'
import GoogleSheets from '../assets/logos/googlesheets_icon.svg'
import Aseprite from '../assets/logos/aseprite_icon.svg'
import AppsScript from '../assets/logos/appsscript_icon.svg'
import Godot from '../assets/logos/godot_icon.svg'
import cbfw_gallery_1 from '../assets/code-bcn-first-warrior/gallery_1.avif'
import cbfw_gallery_2 from '../assets/code-bcn-first-warrior/gallery_2.avif'
import cbfw_gallery_3 from '../assets/code-bcn-first-warrior/gallery_3.avif'
import cbfw_gallery_4 from '../assets/code-bcn-first-warrior/gallery_4.avif'
import cbfw_gallery_5 from '../assets/code-bcn-first-warrior/gallery_4.avif'
const CODE_BCN_FIRST_WARRIOR = {
    title: 'CODE BCN: First Warrior [DEMO]',
    category: 'Personal Project',
    img: {
        src: cbfw_logo,
        alt: 'CODE BCN: First Warrior'
    },
    period: 'Sep 2024 - Feb 2025',
    platform: 'GameJolt / Itch.io',
    gender: `Arcade Shoot 'Em Up 2.5D`,
    developer: null,
    players:'1',
    duration:'15 min',
    rol: 'Solo Developer',
    tasks:[
        '- Arte',
        '- Game Design',
        '- Programación',
        '- Búsqueda e implementación de sonidos y música gratuitos',
    ],
    links: [{url: 'https://gamejolt.com/games/code_bcn_first_warrior_demo/974059',  text:'Jugar'},
            {url: 'https://docs.google.com/spreadsheets/d/1G1eP6YhyQS7atzdI9GpikCls4j6UKBpEKA5LmrYBDyk/edit?gid=896835731#gid=896835731',  text:'Sistema de Balanceo'}
    ],
    tools:[
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
        {src:GoogleSheets, alt:'Google Sheets Icon'},
        {src:Aseprite, alt:'Aseprite Icon'},
        {src:AppsScript, alt:'Google Apps Script Icon'},
        {src:Godot, alt:'Godot Icon'},
    ],
    gallery: [
        {src:cbfw_gallery_1, alt:'CODE BCN img 1'},
        {src:cbfw_gallery_2, alt:'CODE BCN img 2'},
        {src:cbfw_gallery_3, alt:'CODE BCN img 3'},
        {src:cbfw_gallery_4, alt:'CODE BCN img 4'},
        {src:cbfw_gallery_5, alt:'CODE BCN img 5'},
    ],
    extra: [
        {
            title:'Sinopsis', 
            texts:[
                `CODE BCN: First Warrior es una Demo de juego Arcade y Shoot 'Em Up 2.5D Pixelart que tiene lugar en una Barcelona futurista donde la mayoría de robots de la ciudad se han descontrolado y están masacrando a la gente. Juegas como uno de los pocos robots que aún están operativos y deberás intentar eliminar y aguantar lo máximo posible.`,
                `Para poder destruir los robots debes dispararles con el mismo color de sus luces, al quedarse sin color se destruyen, pero ojo que al disparar cambias tu color y funcionas igual.`,
                `Con un estilo pixel art disfruta de enemigos inspirados en la arquitectura de Antoni Gaudí, serás capaz de entender las referencias?`
            ]},
        {
            title:'Destacable', 
            texts:[
                `- Implementado sistema de creación de oleadas y simulación para poder balancear de manera más sencilla en Google Sheets/ Apps Script (Para una explicación profunda podéis contactar conmigo)`,
                `- Implementación de lectura de los CSV de Google Sheets mencionados en Godot para la automática actualización de los parámetros de balance`,
                `- El juego es completamente jugable con Teclado / Ratón - Controller`,
                `- 3 Idiomas: Inglés - Catalán - Español`,
            ]},
    ]
}

const PROJECTS_DATA = [CODE_BCN_FIRST_WARRIOR]

export default PROJECTS_DATA