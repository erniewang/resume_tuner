const { app, BrowserWindow } = require('electron');
const path = require('path');
var util = require("util");

var spawn = require("child_process").spawn;
// Path relative to project root (electronApp is inside project root)
var process = spawn('python',[path.join(__dirname, '..', 'backend', 'optimize.py')]);

util.log('readingin')

process.stdout.on('data',function(chunk:any){
    var textChunk = chunk.toString('utf8');// buffer to string
    util.log(textChunk);
});

app.on('ready', () => {
  console.log('App is ready');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.webContents.openDevTools();
  win.loadFile(path.join(__dirname, 'index.html'));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});