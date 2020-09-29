const { app, BrowserWindow, Menu } = require ('electron')

function createWindow (){
    const win = new BrowserWindow({
        width: 1000, height:800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')

    win.webContents.openDevTools()

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