import * as wing from 'wing';
import * as path from 'path';
import * as fs from 'fs';
 
 ///获取插件位置
export function register() {
    wing.commands.registerCommand("extension.showpos", onCmdHandler);
}


var plug_path:string ;
export function initPath(rootPath:string) 
{
    plug_path = rootPath;
}


function onCmdHandler() {
  
   //跳转到插件安装目录
   
   let newPos = plug_path.substring(0,plug_path.lastIndexOf("egret"));
   var cmdstr = "start"+" "+newPos;   
   var spawn = require('child_process').spawn;
   spawn("cmd.exe",['/c',cmdstr]);    
}
