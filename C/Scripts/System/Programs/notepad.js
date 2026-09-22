function notepadexe(){
    
    new explorer("Notepad", undefined,"Notepad is an easy text editor for everyone!","450","265",false,true,false,false,true,true,true,true,true,`
        <div class="explorer_topbar">
        <button class="disabled"><span class="underline">F</span>ile</button>
        <button class="disabled"><span class="underline">E</span>dit</button>
        <button class="disabled"><span class="underline">V</span>iew</button>
        <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="notepad" id="txt">
        <textarea>

        </textarea>
    </div>
        `).BuildWindow();
}