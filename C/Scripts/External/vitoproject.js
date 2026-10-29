const projectcommands = {
    "--list": function() {
        return `
dungeon 
portflio 
olddays_newways 
`;
    },
    "--help": function() {
        return `
Commands of Projects:
    --list        
    --open`;
    },
    // OPEN
    "--open": function(){
        return "Project not found"
    },
    "--open dungeon": function(){
        return `
- Name: Dungeon
- RepoLink: <a href="https://github.com/TrestoXD/dungeon">LINK</a>
- RepoName: dungeon

- Lenguaje: [Java]
- Description: A Java 3D Game Engine made from Scratch without LWJGL 
        `
    },
    "--open portflio": function(){
        return `
- Name: Portfolio
- RepoLink: <a href="https://github.com/TrestoXD/TrestoXD_Neocities">LINK</a>
- RepoName: TrestoXD_Neocities

- Lenguaje: [JS]
- Description: This Portfolio, pretty cool uh?
        `
    },
    "--open olddays_newways": function(){
        return`
- Name: Old Days New Ways
- RepoLink: <a href="https://github.com/TrestoXD/OldDays_NewWays">LINK</a>
- RepoName: OldDays_NewWays

- Lenguaje: [Minecraft Datapack]
- Description: This is a Minecraft Datapack that aims to 
               balance the gameplay for Casual and 
               "Golden Age" Players  
- Wiki: <a href="https://trestoxd.neocities.org/C/wiki/OldDays_NewWays/wiki-olddays-newways"> LINK </a>
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