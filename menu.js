var remote = require('electron').remote;
var app = remote.app;
var Menu = remote.Menu;

var template = [{
  label: 'View',
  submenu: [{
    label: 'Reload',
    accelerator: 'CmdOrCtrl+R',
    click: function(item, focusedWindow) {
      if (focusedWindow)
        focusedWindow.reload();
    }
  }, {
    label: 'Toggle Full Screen',
    accelerator: (function() {
      if (process.platform == 'darwin') {
        return 'Ctrl+Command+F';
      } else {
        return 'F11';
      }
    })(),
    click: function(item, focusedWindow) {
      if (focusedWindow)
        focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
    }
  }, {
    label: 'Always On Top',
    click: function(item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setAlwaysOnTop(true);
      }
    }
  }, {
    label: 'Cancel Always On Top',
    click: function(item, focusedWindow) {
      if (focusedWindow) {
        focusedWindow.setAlwaysOnTop(false);
      }
    }
  }]
}, {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }]
}, {
  label: 'Help',
  role: 'help',
  submenu: [{
    label: 'Learn More',
    click: function() { require('electron').shell.openExternal('http://electron.atom.io') }
  }]
}];

if (process.platform == 'darwin') {
  var name = app.getName();
  template.unshift({
    label: name,
    submenu: [{
      label: 'About ' + name,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: 'Hide ' + name,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: 'Hide Others',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: 'Show All',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function() { app.quit(); }
    }]
  });
  // Window menu
  template[3].submenu.push({
    type: 'separator'
  }, {
    label: 'Bring All to Front',
    role: 'front'
  });
}

var menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
