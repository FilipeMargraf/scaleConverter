const { app, BrowserWindow } = require('electron');

//main window
var mainWindow = null;
async function openWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600
    })

    await mainWindow.loadFile('src/index.html');
}

//on ready
app.whenReady().then(openWindow);