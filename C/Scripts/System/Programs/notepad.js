var reader = new FileReader;

function notepadexe(dir){
    new explorer("Notepad", undefined,"Notepad is an easy text editor for everyone!","450","265",false,true,false,false,true,true,true,true,true,`
        <div class="explorer_topbar">
        <button class="disabled"><span class="underline">F</span>ile</button>
        <button class="" onclick="notepadeditmenu(this)"><span class="underline">E</span>dit</button>
        <button class="disabled"><span class="underline">V</span>iew</button>
        <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="notepad">
        <textarea id="txt">

        </textarea>
    </div>
    `).BuildWindow();

    readText("aboutme");
}
function notepadeditmenu(button){
        new submenu(atitle,apid,'125','222',button,undefined,`
        <div class="">
            <button class="disabled"> Undo </button>
            <hr>
            <button class="disabled">Cut</button>
            <button class="disabled">Copy</button>
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

function readText(dir){
    fetch("notepad/"+dir+".txt")
    .then((res) => res.text())
    .then((textString) => {
        const notepadtextarea = document.getElementById("txt");
        notepadtextarea.innerHTML = textString;
    })
    .catch((e) => console.error(e));
}