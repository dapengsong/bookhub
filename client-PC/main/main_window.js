const electron = require('electron');

const {
  BrowserWindow,
} = electron;

function createMainWindow() {
  const electronScreen = electron.screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
  });
  return mainWindow;
}

export default createMainWindow;
