const SYSTEM_COMMANDS = {
    "welcome": function() {
        if (typeof WelcomeExe === "function") WelcomeExe();
        return "Iniciando Welcome.exe...";
    },
    "borrate la cuenta": function() {
        return "Borratela tu.";
    },
    "help": function() {
        return "Comandos de sistema disponibles: welcome, help, borrate la cuenta";
    }
};

function cmdexe(title = "MS-DOS PROMPT", initialrute = "C:\\Web95", commandlist = {}){
    let PID = Math.floor(Math.random() * 1000);
    let IDTERMINAL = "msdosprompt_" + PID;
    let IDINPUT = "inputcommand_" + PID;

    // CORRECCIÓN 1: Combinar correctamente SYSTEM_COMMANDS y los comandos que pasas por parámetro
    commandlist = { ...SYSTEM_COMMANDS, ...commandlist };

    new explorer(title, PID,"The run program is to run apps in a fast and easy way","450","250",'./Styles/windowsicons/msdos.ico',false,true,true,true,false,false,true,true,
    `
    <div class="WNavegation">
        <select>
            <option value="Auto">Auto</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
        </select>
        <br>
        <button></button>
        <button></button>
        <button></button>
        <br>
        <button></button>
        <br>
        <button></button>
        <button></button>
        <br>
        <button></button>
    </div>
    <div class="WTerminal" id="${IDTERMINAL}">
        <p>Vito Minaya González MIT License</p>
        <p>(C)Copyright WEB95 2026.</p>
    
        <span> ${initialrute} > </span><input type="text" id="${IDINPUT}" autocomplete="off"> 
    </div>
    `).BuildWindow();

    let inputElement = document.getElementById(IDINPUT);
    inputElement.focus();
    inputElement.addEventListener('keypress',msdosinput);

    function msdosinput(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            let CMDOUTPUT = document.getElementById(IDTERMINAL);
            let currentInput = document.getElementById(IDINPUT);
            let commandValue = currentInput.value.trim().toLowerCase();

            let result = document.createElement("div");
            let newPrompt = document.createElement("div");

            currentInput.outerHTML = `<span>${currentInput.value}</span>`;

            if (commandValue === "") {
                result.innerHTML = "";
            } 
            else if (commandlist.hasOwnProperty(commandValue)) {
                // CORRECCIÓN 2: Cambiado 'listaComandos' por 'commandlist' que es tu variable local
                let salida = commandlist[commandValue]();
                result.innerHTML = salida ? `<p>${salida}</p>` : "";
            } 
            else {
                result.innerHTML = `<p>${commandValue} is not recognized as an internal or external command.</p>`;
            }

            newPrompt.innerHTML = `<span> ${initialrute} > </span><input type="text" id="${IDINPUT}" autocomplete="off">`;

            CMDOUTPUT.appendChild(result);
            CMDOUTPUT.appendChild(newPrompt);

            let nextInput = document.getElementById(IDINPUT);
            nextInput.addEventListener('keypress', msdosinput);
            nextInput.focus();
        }
    }
}
