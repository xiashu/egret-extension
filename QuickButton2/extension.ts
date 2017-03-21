import * as wing from 'wing';

export function activate(context: wing.ExtensionContext) {
  
  wing.commands.registerCommand("extension.res",onCmdHandler);
    wing.commands.registerCommand("extension.resoure", onOpenResourceHandler);
  init(); 
}


function onOpenResourceHandler() {

  var path = wing.workspace.rootPath + "\\resource" ;
  var cmdstr = "start" + " " + path;
  var spawn = require('child_process').spawn;
  spawn("cmd.exe", ['/c', cmdstr]);

}
 


function  onCmdHandler() {	
  var path = wing.workspace.rootPath +"\\resource"+"\\"+"default.res.json";
  wing.workspace.openTextDocument(path).then(doc=>{   
    wing.window.showTextDocument(doc);
  });
}

function  init() {	
   var statusbaritem = wing.window.createStatusBarItem(wing.StatusBarAlignment.Left);
    statusbaritem.text = "资源";
    statusbaritem.command = "extension.res";
    statusbaritem.show(); //显示状态栏，hide则为隐藏状态栏

    var statusbaritem2 = wing.window.createStatusBarItem(wing.StatusBarAlignment.Left);
    statusbaritem2.text = "resource";
    statusbaritem2.command = "extension.resoure";
    statusbaritem2.show(); //显示状态栏，hide则为隐藏状态栏
}
