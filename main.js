'use strict';

const electron = require('electron')

const app = electron.app;

let mainWindow;

app.on('ready', function() {
  createWindow();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  mainWindow = new electron.BrowserWindow({
    "min-width"         : 800,
    "min-height"        : 600,
    fullscreen          : true,
    resizable           : true,
    "use-content-size"  : true,
    title: '哔哩哔哩',
    icon: __dirname + '/bilibili.png'
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
