const{app,globalShortcut,BrowserWindow}=require("electron"),path=require("path");require("electron-squirrel-startup")&&app.quit(),app.allowRendererProcessReuse=!1,app.commandLine.appendSwitch("--disable-gpu-process-crash-limit");const trackyMouseFolder=app.isPackaged?`${app.getAppPath()}/copied/`:`${__dirname}/../../`;let mainWindow;const createWindow=()=>{mainWindow=new BrowserWindow({width:800,height:600,webPreferences:{preload:path.join(app.getAppPath(),"src/preload.js")},icon:`${trackyMouseFolder}/images/tracky-mouse-logo-512.png`}),mainWindow.loadFile(`${trackyMouseFolder}/index.html`),mainWindow.webContents.on("before-input-event",((e,n)=>{"keyDown"===n.type&&"F12"===n.key&&(mainWindow.webContents.toggleDevTools(),mainWindow.webContents.on("devtools-opened",(()=>{mainWindow.webContents.devToolsWebContents.executeJavaScript('\n            new Promise((resolve)=> {\n              addEventListener("keydown", (event) => {\n                if (event.key === "F12") {\n                  resolve();\n                }\n              }, { once: true });\n            })\n          ').then((()=>{mainWindow.webContents.toggleDevTools()}))})))}))};app.on("ready",(()=>{createWindow();globalShortcut.register("F9",(()=>{mainWindow.webContents.send("shortcut","toggle-tracking")}))})),app.requestSingleInstanceLock()||app.quit(),app.on("second-instance",(()=>{mainWindow&&(mainWindow.isMinimized()&&mainWindow.restore(),mainWindow.show())})),app.on("window-all-closed",(()=>{"darwin"!==process.platform&&app.quit()})),app.on("activate",(()=>{0===BrowserWindow.getAllWindows().length&&createWindow()}));