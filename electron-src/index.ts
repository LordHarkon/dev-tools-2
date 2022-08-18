// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

let mainWindow: BrowserWindow;

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    icon: join(__dirname, "..", "assets/icons/logo.png"),
    webPreferences: {
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  const url = isDev
    ? "http://localhost:8000/"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

ipcMain.on("close-app", () => {
  mainWindow.close();
});

ipcMain.on("minimize-app", () => {
  mainWindow.minimize();
});

ipcMain.on("maximize-app", () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});
