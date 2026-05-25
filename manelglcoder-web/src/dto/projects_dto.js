
import Git from '../assets/logos/git_icon.svg'
import SourceTree from '../assets/logos/sourcetree_icon.svg'
import VSCode from '../assets/logos/vscode_icon.svg'
import Html5 from '../assets/logos/html5_icon.svg'
import JS from '../assets/logos/js_icon.svg'
import CSS from '../assets/logos/css_icon.svg'
import Tailwind from '../assets/logos/tailwindcss_icon.svg'
import React from '../assets/logos/react_icon.svg'

import w_img from '../assets/manelglcoder/my_web.png'
const MY_WEB = {
    title: 'ManelGLCoder (Esta web)',
    category: 'Proyecto Personal',
    img: {
        src: w_img,
        alt: 'Web img'
    },
    period: 'Abr - May 2026',
    gameData:null,
    rol: 'Front End Developer',
    tasks:[
        '- Diseño',
        '- Implementación',
    ],
    links:null,
    tools:[
        {src:VSCode, alt:'VSCode Icon'},
        {src:Html5, alt:'HTML5 Icon'},
        {src:JS, alt:'JS Icon'},
        {src:CSS, alt:'CSS Icon'},
        {src:Tailwind, alt:'Tailwind Icon'},
        {src:React, alt:'React Icon'},
    ],
    gallery:null,
    extra: [
        {
            title:'resumen', 
            texts:[
                `Web desarrollada a través de React JS y Tailwind`,
                `Diseñada para mi marca profesional`,
            ]},
        {
            title:'Destacable', 
            texts:[
                `- Diseño como si fuera un escritorio de ordenador(vista de PC) o de móvil(vista de smartphone)`,
            ]},
    ]
}

import pk_logo from '../assets/manelglcoder/pk_1.png'
import pk_gallery_1 from '../assets/manelglcoder/pk_1.png'
import pk_gallery_2 from '../assets/manelglcoder/pk_2.png'
import pk_gallery_3 from '../assets/manelglcoder/pk_3.png'
const POKEDEX_REACT = {
    title: 'Pokedex React',
    category: 'Proyecto Personal',
    img: {
        src: pk_logo,
        alt: 'Pokedex React'
    },
    period: 'Feb - Mar 2026',
    gameData:null,
    rol: 'Front End Developer',
    tasks:[
        '- Diseño',
        '- Implementación',
    ],
    links: [
        {url: 'https://manelglcoder.github.io/Pokedex_R_T/',  text:'Ver'},
    ],
    tools:[
        {src:VSCode, alt:'VSCode Icon'},
        {src:Html5, alt:'HTML5 Icon'},
        {src:JS, alt:'JS Icon'},
        {src:CSS, alt:'CSS Icon'},
        {src:Tailwind, alt:'Tailwind Icon'},
        {src:React, alt:'React Icon'},
    ],
    gallery: [
        {src:pk_gallery_1, alt:'POKEDEX img 1'},
        {src:pk_gallery_2, alt:'POKEDEX img 2'},
        {src:pk_gallery_3, alt:'POKEDEX img 3'},
    ],
    extra: [
        {
            title:'resumen', 
            texts:[
                `Web desarrollada a través de React JS, Tailwind, PokeApi`,
                `Contiene: lista Pokémon, búsqueda por nombre o ID, y pantalla con la información del pokemon`,
            ]},
        {
            title:'Destacable', 
            texts:[
                `- Implementación usando la PokeApi`,
                `- TDD`,
            ]},
    ]
}

import GoogleSheets from '../assets/logos/googlesheets_icon.svg'
import Aseprite from '../assets/logos/aseprite_icon.svg'
import AppsScript from '../assets/logos/appsscript_icon.svg'
import Godot from '../assets/logos/godot_icon.svg'
import cbfw_logo from '../assets/code-bcn-first-warrior/logo.png'
import cbfw_gallery_1 from '../assets/code-bcn-first-warrior/gallery_1.avif'
import cbfw_gallery_2 from '../assets/code-bcn-first-warrior/gallery_2.avif'
import cbfw_gallery_3 from '../assets/code-bcn-first-warrior/gallery_3.avif'
import cbfw_gallery_4 from '../assets/code-bcn-first-warrior/gallery_4.avif'
import cbfw_gallery_5 from '../assets/code-bcn-first-warrior/gallery_5.avif'
const CODE_BCN_FIRST_WARRIOR = {
    title: 'CODE BCN: First Warrior [DEMO]',
    category: 'Proyecto Personal',
    img: {
        src: cbfw_logo,
        alt: 'CODE BCN: First Warrior'
    },
    period: 'Sep 2024 - Feb 2025',
    gameData:{
        platform: 'GameJolt / Itch.io',
        gender: `Arcade Shoot 'Em Up 2.5D`,
        developer: null,
        players:'1',
        duration:'15 min',
    },
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

import Unity from '../assets/logos/unity_icon.svg'
import dbm_logo from '../assets/dbm/dbm_splash.jpg'
import dbm_gallery_1 from '../assets/dbm/gallery_1.avif'
import dbm_gallery_2 from '../assets/dbm/gallery_2.avif'
import dbm_gallery_3 from '../assets/dbm/gallery_3.avif'
import dbm_gallery_4 from '../assets/dbm/gallery_4.avif'
import dbm_gallery_5 from '../assets/dbm/gallery_5.png'
import dbm_gallery_6 from '../assets/dbm/gallery_6.png'
import dbm_gallery_7 from '../assets/dbm/gallery_7.png'
const DEATH_BY_MISSTEP = {
    title: 'Death By Misstep',
    category: 'Proyecto Pre-incubado',
    img: {
        src: dbm_logo,
        alt: 'Death By Misstep'
    },
    period: '2021 - 2022',
    gameData:{    
        platform: 'Steam',
        gender: `Sigilo, Ritmo`,
        developer: 'Misstep Studio',
        players:'1',
        duration:'15 min (DEMO)',
    },
    rol: 'Producer, Developer, Community Manager',
    tasks:[
        '- Organización y seguimiento',
        '- Game Design',
        '- Programación de sistemas y enemigos',
        '- Gestión de redes sociales',
    ],
    links: [{url: 'https://deathbymisstep.com/es/',  text:'Web Oficial'},
            {url: 'https://store.steampowered.com/app/3998530/Death_By_Misstep_Demo/',  text:'Jugar Demo'}
    ],
    tools:[
        {src:Unity, alt:'Unity Icon'},
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
    ],
    gallery: [
        {src:dbm_gallery_1, alt:'Death By Misstep img 1'},
        {src:dbm_gallery_2, alt:'Death By Misstep img 2'},
        {src:dbm_gallery_3, alt:'Death By Misstep img 3'},
        {src:dbm_gallery_4, alt:'Death By Misstep img 4'},
        {src:dbm_gallery_5, alt:'Death By Misstep img 5'},
        {src:dbm_gallery_6, alt:'Death By Misstep img 6'},
        {src:dbm_gallery_7, alt:'Death By Misstep img 7'},
    ],
    extra: [
        {
            title:'Sinopsis', 
            texts:[
                `Death By Misstep es un juego de Terror y Ritmo en Primera Persona en 3D que tiene lugar en un crucero llamado “Exultant Lusibus Aeternum“, diseñado únicamente para maratones de fiestas, en el cual debes huir y descubrir la verdad, mientras evitas ser asesinado por los robots.`,
                `Toda acción deberá ser al ritmo de la música para evitar ser visto o matado por los robots. Muévete, escóndete, respira, usa el flash del móvil, recoge objetos pero nunca fuera del ritmo.`,
                `Descubre el crucero que siempre esta lleno de fiestas y diversión, con todo tipo de servicios para mantenerlos al día… o así era hasta ahora.`
            ]},
        {
            title:'Destacable', 
            texts:[
                `- Proyecto Pre-incubado por LevelUp-Hub`,
            ]},
    ]
}


const PROJECTS_DATA = [MY_WEB, POKEDEX_REACT, CODE_BCN_FIRST_WARRIOR, DEATH_BY_MISSTEP]

export default PROJECTS_DATA