var reader = new FileReader;

function notepadexe(dir){
    new explorer("Notepad", undefined,"Notepad is an easy text editor for everyone!","450","265","./Styles/AppIcons/Notepad.ico",true,true,true,true,true,false,true,true,`
        <div class="explorer_topbar">
        <button class="disabled"><span class="underline">F</span>ile</button>
        <button class="" onclick="notepadeditmenu(this)"><span class="underline">E</span>dit</button>
        <button class="disabled"><span class="underline">V</span>iew</button>
        <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="notepad">
        <textarea id="txt"></textarea>
    </div>
    `).BuildWindow();

    if(dir != null){
        readText(dir);   
    }
    
}
function notepadeditmenu(button){
        new submenu(" ","00002",'155','222',button,undefined,`
        <div class="">
            <button class="disabled"> Undo </button>
            <hr>
            <button class="disabled">Cut</button>
            <button onclick="clipboardcopy()">Copy</button>
            <button class="disabled">Paste</button>
            <button class="disabled">Delete</button>
            <hr>
            <button>Select All</button>
            <button>Time/Date</button>
            <hr>
            <button>Word Wrap</button>
            </div>
        `)
    }
var notepadtextarea;
function readText(dir){
    fetch("notepad/"+dir+".txt")
    .then((res) => res.text())
    .then((textString) => {
        notepadtextarea = document.getElementById("txt");
            reviewProperties(textString);
        notepadtextarea.innerHTML = textString;
    })
    .catch((e) => console.error(e));
}

function reviewProperties(textfromfile){
    if(textfromfile.includes("---")){
        console.log("Incluye propiedades");
        if(textfromfile.includes("text: center")){
            area = document.getElementById("txt").style.textAlign = "center";
        }
        var startPos = textfromfile.indexOf('---') + 1;
        var endPos = textfromfile.indexOf('---', startPos);
        var text_to_get = textfromfile.substring(startPos,endPos);

        notepadtextarea = text_to_get;
    }
}

function clipboardcopy(){
    var text = document.getElementById("txt")
    text.select();
    text.setSelectionRange(0, 99999);

    console.log(text.innerHTML);
    navigator.clipboard.writeText(text.innerHTML);


}