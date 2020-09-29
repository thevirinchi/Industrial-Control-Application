const { app, BrowserWindow, Menu } = require ('electron')

function createWindow (){
    const win = new BrowserWindow({
        width: 600, height:800, frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/index.html')

    //win.webContents.openDevTools()

    var menu = Menu.buildFromTemplate([{
        label: 'Menu',
        submenu: [
            {label: 'Exit'},
        ]
    }])

    Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform!=='darwin')
        app.quit()
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0)
        createWindow()
})