import * as wing from 'wing';
import * as path from 'path';
import * as fs from 'fs';
 
 ///集成录制gif的工具，方便插件录制，录制操作
export function register() {
    wing.commands.registerCommand("extension.showgif", onCmdHandler);
}


var plug_path:string;
export function initPath(rootPath:string) 
{
    plug_path = rootPath+"exe"+ path.sep+"GifCam.exe";
}


function onCmdHandler() {
    let e = wing.window.activeTextEditor;
    if (!e) {
        return;
    }
   //跳转到插件安装目录
   
   var spawn = require('child_process').spawn;
   spawn(plug_path);    
}
