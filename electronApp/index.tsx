const { app, BrowserWindow } = require("electron");
const path = require("path");
var util = require("util");

var spawn = require("child_process").spawn;
// Path relative to project root (electronApp is inside project root)
//var process = spawn('python',[path.join(__dirname, '..', 'backend', 'optimize.py')]);

util.log("readingin");

app.on("ready", () => {
  const win = new BrowserWindow({
    x: 950,
    y: 0,
    width: 700,
    height: 600,
    minWidth: 480,
    minHeight: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  //win.webContents.openDevTools();
  win.loadFile(path.join(__dirname, "index.html"));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
