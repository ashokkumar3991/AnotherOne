// const electron = require('electron')
const {app,BrowserWindow} = require('electron')

function createWindow (){
    let win = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    }) // create a new window with the above prefrences



    win.loadFile('index.html') // load the index.html in the window

    win.webContents.openDevTools()

    win.on('closed' , () =>{
        win = null
    })
}

app.on('ready',createWindow) // when app is ready call the function

app.on('window-all-closed' , () =>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(win===null){
        createWindow()
    }
})