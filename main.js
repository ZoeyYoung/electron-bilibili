'use strict';

const electron = require('electron')
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  createWindow();
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

function createWindow() {
  // @see https://github.com/electron/electron/blob/master/docs%2Fapi%2Fbrowser-window.md
  mainWindow = new BrowserWindow({
    width: 1280,
    minWidth: 1280,
    minHeight: 600,
    resizable: true,
    useContentSize: true,
    alwaysOnTop: true,
    title: '哔哩哔哩',
    icon: __dirname + '/bilibili.png'
  });
  mainWindow.loadURL("http://www.bilibili.com/");
  // mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}
