let astate = false;
let atitle = 'audio'
let apid = '00010'

function soundmenuexe(button){
    if(astate == false){


    new menu(atitle,apid,'50',undefined,button,undefined,`
        <div class="minmenu">
            <p>Audio</p>
        </div>
        `)
    astate = true;
    }else{
        CloseMenu(atitle,apid)
    }
}
function CloseMenu(atitle,apid){
        state = false
        CloseWindow(atitle,apid)
}