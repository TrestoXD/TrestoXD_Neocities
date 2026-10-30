oncontextmenu = (e) => {
    let rightmenudiv = document.getElementById("contextmenu");
    if(rightmenudiv === null){
        e.preventDefault();
        let x = e.pageX - 5
        let y = e.pageY - 5

        console.log('la x es:'+ x)

        if(e.target.closest(".overlay")){
        ContextmenuExe(x +'px', y +'px', false, true, `
            <button >Arrange Icons</Button>
            <Button >Line Up Icons</Button> <hr></hr> 
            <button class="disabled">Paste</button>
            <button class="disabled">Paste Shortcut</button>
            <button >Undo Delete</button> <hr></hr> 
            <button >New</button> <hr></hr> 
            <button onclick='customerror("An error message to annoy you.", "Context menu Failed")' class='textbutt'>Properties</button>
        `);
        }
    }
}