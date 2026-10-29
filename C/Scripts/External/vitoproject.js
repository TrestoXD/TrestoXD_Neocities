// States:
/*
    Active      ![Static Badge](https://img.shields.io/badge/State-Active-brightgreen?style=plastic)    Esta activo
    Dormant     ![Static Badge](https://img.shields.io/badge/State-Dormant-yellow?style=plastic)        Esta durmiendo pero no cerrado
    Deprecated  ![Static Badge](https://img.shields.io/badge/State-Deprecated-orange?style=plastic)     No se aconseja su uso ya que tiene muchos errores
    Archived    ![Static Badge](https://img.shields.io/badge/State-Archived-purple?style=plastic)       Esta archivado
    Mainteind   ![Static Badge](https://img.shields.io/badge/State-Mainteind-blue?style=plastic)        Se mantiene las actualizaciones de seguridad pero nada mas
    Abandoned   ![Static Badge](https://img.shields.io/badge/State-Abandonated-red?style=plastic)       Esta abandonado :c
*/


const projectcommands = {
    "--list": function() {
        return `
dungeon 
portfolio 
olddays_newways 
ev
`;
    },
    "--help": function() {
        return `
Commands of Projects:
    --list        
    --open (project)`;
    },
    // OPEN
    "--open": function(){
        return "Project not found"
    },
    "--open dungeon": function(){
        return `
- Name:        Dungeon
- RepoLink:    <a href="https://github.com/TrestoXD/dungeon">LINK</a>
- RepoName:    dungeon

- Lenguaje:    [Java]
- Description: A Java 3D Game Engine made from Scratch 
               without LWJGL 
        `
    },
    "--open portfolio": function(){
        return `
- Name:        Portfolio
- RepoLink:    <a href="https://github.com/TrestoXD/TrestoXD_Neocities">LINK</a>
- RepoName:    TrestoXD_Neocities
- State:       Active

- Lenguaje:    [Java Script]
- Description: This Portfolio, pretty cool uh?
        `
    },
    "--open olddays_newways": function(){
        return`
- Name:        Old Days New Ways
- RepoLink:    <a href="https://github.com/TrestoXD/OldDays_NewWays">LINK</a>
- RepoName:    OldDays_NewWays
- State:    

- Lenguaje:    [Minecraft Datapack]
- Description: This is a Minecraft Datapack that aims to 
               balance the gameplay for Casual and 
               "Golden Age" Players  
- Wiki:        <a href="https://trestoxd.neocities.org/C/wiki/OldDays_NewWays/wiki-olddays-newways"> LINK </a>
`
    },
    "--open ev": function(){
        return `
- Name:        E.V.
- RepoLink:    <a href="https://github.com/TrestoXD/E.V.">LINK</a>
- RepoName:    E.V.
- State:       

- Lenguaje:    [RUST]
- Description: E.V. o Essential Virtual-assistant es un 
               asistente de control multimedia en RUST

`
    }
};

function ProjectsExe(){
    cmdexe("Github Projects", "", projectcommands, 
        `
=======================================
▄──▄ ▄──▄ ▄──▄    ▄ ▄──▄ ▄──▄ ▄──▄ ▄──▄ 
█  █ █  █ █  █    █ █  █ █  █ █  █ █  █ 
█──▀ █─_▀ █  █ █  █ █──▀ █       █ ▀──▄ 
▀    ▀  ▀ ▀──▀ ▀──▀ ▀──▀ ▀──▀    ▀ ▀──▀ 
=======================================
If you need help use the "--help" command
        `);  
}