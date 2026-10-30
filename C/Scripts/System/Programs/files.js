function FilesExe(owner = "TrestoXD", repo = "TrestoXD_Neocities") {
    const instanceId = repo + "_" + Date.now();

    const windowContent = `
        <div class="explorer_topbar" style="border:none">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
        </div>
        <hr>
        
        <div class="explorer_files_topbar" style="display: flex; align-items: center; gap: 2px; margin-right:4px">
            <select id="gh-select-${instanceId}" style="margin-right:6px; flex: 1;">
                <option>/${owner}/${repo}</option>
            </select>
            <button style="margin-right:10px;"> <img alt="Navegate" src="./Styles/icons/System/Navegate.ico"> </button> 
            <button> <img alt="Cut" src="./Styles/icons/System/Cut.ico"> </button> 
            <button> <img alt="Copy" src="./Styles/icons/System/Copy.ico" style="transform: translate(-12px, -10px);"> </button> 
            <button style="margin-right:10px;"> <img alt="Paste" src="./Styles/icons/System/Paste.ico"> </button> 
            <button> <img alt="Undo" src="./Styles/icons/System/Undo.ico"> </button>
        </div>

        <div class="explorer_files" id="gh-files-${instanceId}" style="height: calc(100% - 125px); overflow-y: auto;">
            <p style="padding: 6px;">Connecting to GitHub...</p>
        </div>

        <div class="explorer_bottombar">
            <p id="gh-status-${instanceId}" style="margin: 0; font-family: F95; font-size: calc(16px - var(--fontsize));">Reading repository...</p>
            <p> <span class="Wbottom-expand">p</span></p>
        </div>
    `;

    new explorer(
        `Exploring - ${repo}`, 
        undefined, 
        `Exploring repository ${owner}/${repo}`, 
        "550", 
        "380", 
        './Styles/windowsicons/windows.png', 
        false, 
        true,  
        true,  
        true,  
        false, 
        false, 
        true,  
        true,  
        null,  
        windowContent
    ).BuildWindow();

    loadGitHubRepoWin95(owner, repo, "", `gh-files-${instanceId}`, `gh-status-${instanceId}`);
}

async function loadGitHubRepoWin95(owner, repo, path, containerId, statusId) {
    const container = document.getElementById(containerId);
    const statusElement = document.getElementById(statusId);
    if (!container) return;

    container.innerHTML = `<p style="padding: 6px;">Loading...</p>`;

    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Could not access directory.");
        
        const items = await response.json();
        let html = '';

        items.sort((a, b) => (a.type === 'dir' ? -1 : 1));

        if (path !== "") {
            const parentPath = path.split('/').slice(0, -1).join('/');
            html += `
                <button ondblclick="loadGitHubRepoWin95('${owner}', '${repo}', '${parentPath}', '${containerId}', '${statusId}')">
                    <img src="./Styles/AppIcons/Folder.ico"> <p>..</p>
                </button>`;
        }

        items.forEach(item => {
            const icon = item.type === 'dir' 
                ? './Styles/AppIcons/Folder.ico' 
                : './Styles/appicons/doc_Notepad.ico';
            
            if (item.type === 'dir') {
                html += `
                    <button ondblclick="loadGitHubRepoWin95('${owner}', '${repo}', '${item.path}', '${containerId}', '${statusId}')"> 
                        <img src="${icon}"> <p>${item.name}</p>
                    </button>`;
            } else {
                html += `
                    <button ondblclick="window.open('${item.html_url}', '_blank')"> 
                        <img src="${icon}"> <p>${item.name}</p>
                    </button>`;
            }
        });

        container.innerHTML = html;

        if (statusElement) {
            const totalObjects = container.querySelectorAll('button').length;
            statusElement.textContent = `${totalObjects} object(s)`;
        }

    } catch (error) {
        container.innerHTML = `<p style="padding: 6px; color: red;">Error connecting to GitHub.</p>`;
        if (statusElement) statusElement.textContent = "Error";
    }
}