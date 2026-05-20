
import Git from '../assets/logos/git_icon.svg'
import SourceTree from '../assets/logos/sourcetree_icon.svg'
import UnrealEngine from '../assets/logos/unrealengine_icon.svg'
import sotr_logo from '../assets/so-tr/logo.png'
import sotr_gallery_1 from '../assets/so-tr/gallery_1.png'
import sotr_gallery_2 from '../assets/so-tr/gallery_2.png'
import sotr_gallery_3 from '../assets/so-tr/gallery_3.png'
import sotr_gallery_4 from '../assets/so-tr/gallery_4.png'
import sotr_gallery_5 from '../assets/so-tr/gallery_5.png'
import sotr_gallery_6 from '../assets/so-tr/gallery_6.png'
import sotr_gallery_7 from '../assets/so-tr/gallery_7.png'
import sotr_gallery_8 from '../assets/so-tr/gallery_8.png'
import sotr_gallery_9 from '../assets/so-tr/gallery_9.png'
import sotr_gallery_10 from '../assets/so-tr/gallery_10.png'

const STEAM_OVERLOAD_THE_RAGE = {
    title: 'Steam Overload: The Rage',
    category: 'TFG (Trabajo Final de Grado)',
    img: {
        src: sotr_logo,
        alt: 'Steam Overload: The Rage'
    },
    period: '2019 - 2020',
    gameData:{
        platform: 'Windows',
        gender: `Twin Stick Shooter Top Down 3D`,
        developer: 'Crumbled Reality',
        players:'1',
        duration:'20 min',
    },
    rol: 'Producer, Developer, Game Designer, Community Manager',
    tasks:[
        '- Organización y seguimiento',
        '- Game Design',
        '- Programación de sistemas y enemigos',
        '- Gestión de redes sociales',
    ],
    links: [{url: 'https://crumbledrealitystu.wixsite.com/steamoverloadtherage',  text:'Web Oficial'},
            {url: 'https://crumbledrealitystu.wixsite.com/steamoverloadtherage/download',  text:'Descargar'}
    ],
    tools:[
        {src:UnrealEngine, alt:'Unreal Engine Icon'},
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
    ],
    gallery: [
        {src:sotr_gallery_1, alt:'Steam Overload: The Rage img 1'},
        {src:sotr_gallery_2, alt:'Steam Overload: The Rage img 2'},
        {src:sotr_gallery_3, alt:'Steam Overload: The Rage img 3'},
        {src:sotr_gallery_4, alt:'Steam Overload: The Rage img 4'},
        {src:sotr_gallery_5, alt:'Steam Overload: The Rage img 5'},
        {src:sotr_gallery_6, alt:'Steam Overload: The Rage img 6'},
        {src:sotr_gallery_7, alt:'Steam Overload: The Rage img 7'},
        {src:sotr_gallery_8, alt:'Steam Overload: The Rage img 8'},
        {src:sotr_gallery_9, alt:'Steam Overload: The Rage img 9'},
        {src:sotr_gallery_10, alt:'Steam Overload: The Rage img 10'},
    ],
    extra: [
        {
            title:'Sinopsis', 
            texts:[
                `Steam Overload: The Rage es un Twin Stick Shooter, Top Down 3D, basado en vencer infinitas oleadas de enemigos en una ciudad que combina el arte steampunk con el estilo arquitectónico de Gaudí.`,
                `Argumento: En este mundo steampunk hay un fenómeno que mueve a las masas, el Steam Overload Robots Fight Reality Show. Un espectáculo sobre pelea de robots que han tomado conciencia de sus vidas. Encarnarás a uno de los robots que intentará sobrevivir al espectáculo y  escapar.`,
                `El objetivo es aguantar el máximo de oleadas posible mientras obtienes mejoras y la experiencia se ajusta de manera dinámica.`,
                `El juego consta de un modo oleadas, en el que lucharas en cada ronda en una arena distinta entre seis con sus propias trampas, además de tener un sistema que ajusta la experiencia de manera dinámica inspirándose en el AI Director de Left 4 Dead, dos armas distintas, nueve mejoras y cuatro tipos de enemigos. También contiene un modo museo donde se puede apreciar mejor el arte actual del juego, incluso arte que no se incluyó en el juego finalmente.`
            ]},
        {
            title:'Destacable', 
            texts:[
                `- Diseño e implementación de un sistema de ajuste de dificultad dinámico durante la partida`,
            ]},
    ]
}

import mk_logo from '../assets/merry-krampus/logo.avif'
import mk_gallery_1 from '../assets/merry-krampus/gallery_1.avif'
import mk_gallery_2 from '../assets/merry-krampus/gallery_2.avif'
import mk_gallery_3 from '../assets/merry-krampus/gallery_3.avif'
import mk_gallery_4 from '../assets/merry-krampus/gallery_4.avif'
import mk_gallery_5 from '../assets/merry-krampus/gallery_5.avif'
import mk_gallery_6 from '../assets/merry-krampus/gallery_6.avif'
import mk_gallery_7 from '../assets/merry-krampus/gallery_7.avif'

const MERRY_KRAMPUS = {
    title: 'Merry Krampus',
    category: 'Proyecto Grado',
    img: {
        src: mk_logo,
        alt: 'Merry Krampus'
    },
    period: '2018 - 2019',
    gameData:{
        platform: 'Windows',
        gender: `Top Down Dungeon 3D`,
        developer: 'Cold Night Games',
        players:'1',
        duration:'1 h',
    },
    rol: 'Developer',
    tasks:[
        '- Implementación de enemigos',
        '- Implementación de jefes',
        '- Implementación Sistema de penalizaciones del calendario',
    ],
    links: [],
    tools:[
        {src:UnrealEngine, alt:'Unreal Engine Icon'},
        {src:Git, alt:'Git Icon'},
        {src:SourceTree, alt:'Source Tree Icon'},
    ],
    gallery: [
        {src:mk_gallery_1, alt:'Merry Krampus img 1'},
        {src:mk_gallery_2, alt:'Merry Krampus img 2'},
        {src:mk_gallery_3, alt:'Merry Krampus img 3'},
        {src:mk_gallery_4, alt:'Merry Krampus img 4'},
        {src:mk_gallery_5, alt:'Merry Krampus img 5'},
        {src:mk_gallery_6, alt:'Merry Krampus img 6'},
        {src:mk_gallery_7, alt:'Merry Krampus img 7'},
    ],
    extra: [
        {
            title:'Sinopsis', 
            texts:[
                `Merry Krampus es un Top-down dungeon survival basado en la leyenda de Krampus del folklore de los países alpinos.`,
                `Argumento: Ante esta sociedad capitalista, Santa a decidido dar regalos a los niños por dinero sin importar si se portan bien o mal por lo que Krampus a decidido matarlo para equilibrar la balanza.`,
                `El objetivo es avanzar a través de los pueblos generados proceduralmente, matando a todo enemigo hasta llegar a Santa y matarlo. Y así sucesivamente hasta pasarte los 31 días de Diciembre, ¿serás capaz?`,
                `El juego consta de un calendario con 31 días en los que a medida que avanzas, se acumulan debuffos para Krampus.`
            ]},
    ]
}
const OLD_PROJECTS_DATA = [STEAM_OVERLOAD_THE_RAGE, MERRY_KRAMPUS]

export default OLD_PROJECTS_DATA