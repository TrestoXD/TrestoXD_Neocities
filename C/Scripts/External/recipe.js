function RecipeMasterExe(){
    new explorer("System Information", // Title
        undefined, // PID
        "The program to chech the infromation of the system", // Description
        "500", // Width
        "375", // Height
        null, // Icon
        false, // Once
        true, // Minimizable
        true, // Maximizable
        true, // Closable
        false, // ontop
        false, // IsDialog
        true, // Movable
        true, // Create Button On Taskbar
        null, // Resizable
        `
    
        <nav>
            <button class="tablinks" onclick="showTab(event, 'recetas')">Recetas</button>
            <button class="tablinks" onclick="showTab(event, 'ingredientes')">Ingredientes</button>
            <button class="tablinks" onclick="showTab(event, 'favoritos')">Favoritos</button>
        </nav>
        <section id="recetas" class="tabcontent">    
            <h3>Recetas</h3>
            <p>Contenido de la sección Recetas</p>
        </section>    
        <section id="ingredientes" class="tabcontent">
            <h3>Ingredientes</h3>
            <p>Contenido de la sección Ingredientes</p>
        </section>
        <section id="favoritos" class="tabcontent">
            <h3>Favoritos</h3>
            <p>Contenido de la sección Favoritos</p>
        </section>
            

    `).BuildWindow();
}

function showTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabContent = document.getElementsByTagName("section");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByTagName("button");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}