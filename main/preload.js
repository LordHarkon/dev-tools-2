"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const electron_1 = require("electron");
// declare global {
//   interface Window {
//     tools: {
//       minimize: () => void;
//       maximize: () => void;
//       close: () => void;
//     };
//   }
// }
// // Since we disabled nodeIntegration we can reintroduce
// // needed node functionality here
// process.once("loaded", () => {
//   global.ipcRenderer = ipcRenderer;
// });
electron_1.contextBridge.exposeInMainWorld("tools", {
    minimize: () => {
        electron_1.ipcRenderer.send("minimize-app");
    },
    maximize: () => {
        electron_1.ipcRenderer.send("maximize-app");
    },
    close: () => {
        electron_1.ipcRenderer.send("close-app");
    },
});
