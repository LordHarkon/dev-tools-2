/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { contextBridge, ipcRenderer } from "electron";

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

contextBridge.exposeInMainWorld("tools", {
  minimize: () => {
    ipcRenderer.send("minimize-app");
  },
  maximize: () => {
    ipcRenderer.send("maximize-app");
  },
  close: () => {
    ipcRenderer.send("close-app");
  },
});
