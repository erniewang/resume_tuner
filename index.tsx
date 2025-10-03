const { app, BrowserWindow } = require('electron');
const path = require('path');
var util = require("util");

var spawn = require("child_process").spawn;
var process = spawn('python',["python/test.py"]);

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

  // Automatically opens the dev tools when chromium opens
  win.webContents.openDevTools();
  win.loadFile(path.join(__dirname, 'index.html'));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});