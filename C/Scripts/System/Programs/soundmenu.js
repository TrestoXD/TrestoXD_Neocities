let soundmenustate = false;
let soundmenutitle = 'audio'
let soundmenupid = '00010'

function soundmenuexe(button){
    if(soundmenustate == false){


    new menu(soundmenutitle,soundmenupid,'50',undefined,button,undefined,`
        <div class="minmenu">
            <p>Audio</p>
        </div>
        `)
    soundmenustate = true;
    }else{
        CloseSoundMenu(soundmenutitle,soundmenupid)
    }
}
function CloseSoundMenu(soundmenutitle,soundmenupid){
    soundmenustate = false
    CloseWindow(soundmenutitle,soundmenupid)
}