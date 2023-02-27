const {BrowserWindow,app} = require('electron')

const createWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,

    })
    win.once('ready-to-show', () => {
        win.show();
    });
    win.loadFile('./front/index.html')
    return win
}
const initialize = async () => {
    await app.whenReady();
    createWindow()
}
initialize();

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    createWindow();
})
