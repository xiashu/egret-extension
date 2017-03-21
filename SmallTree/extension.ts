import * as wing from 'wing';
import * as path from  'path';
import * as fs from  'fs';
import {OutputChannel} from "wing";

 
var configPath = ""; //配置路径
var exePath = ""; //配置路径
 

export function activate(context: wing.ExtensionContext) {
	
    exePath = __dirname+"/config/";
    configPath = path.join(__dirname, "/config/config.json");
	wing.commands.registerCommand('extension.smalltree', onCmdHandler);
	init();
}

 
function onCmdHandler() {

 wing.window.showWarningMessage("是否扩展Wing功能？", "YES", "NO").then(function (value) {
	if (value == "YES") {
	      
        makeExtension();
      
	}
});
   	 
}


function makeExtension(){

	var content = fs.readFileSync(configPath,"utf-8");
	var obj = JSON.parse(content);
	if(obj.htmlPath)
	{
       var htmlContent = fs.readFileSync(obj.htmlPath,"utf-8");
       var index = htmlContent.lastIndexOf("</html>");      
       if(index!=-1)
	   {
         
          htmlContent = htmlContent.substring(0,index+7);
		  var newContent = fs.readFileSync(exePath+"code.txt","utf-8");
		  newContent = htmlContent+"\n"+newContent;
		 
          replaceFile(obj.htmlPath,htmlContent,newContent);
		  copyFile(path.dirname(obj.htmlPath)+"/");
		 
	   }

	}
    else
	{
           
		wing.workspace.openTextDocument(configPath).then(function (doc) {
			wing.window.showTextDocument(doc);
		});

		wing.window.showWarningMessage("请先将配置安装目录 resources\\app\\out\\vs\\workbench\\electron-browser\\bootstrap\\index.html的位置配置JSON的htmlPath字段")
	}

}


//复制文件
function replaceFile(htmlPath,oldContent,newContent){

      fs.writeFile(path.dirname(htmlPath)+"/index_bak.html",oldContent,"utf-8",function(err){
		  if(err) console.log("写入失败");
		 
	  }); 

	  fs.writeFile(htmlPath,newContent,"utf-8",function(err){
		  if(err) {console.log("写入失败");return}
		 
	  }); 
}



function copyFile(path){

 var files = [exePath+"cmd.js",exePath+"cmd.css"];
 var target = [path+"cmd.js",path+"cmd.css"];
 for(var i =0;i < files.length;i++)
 {
      var data =  fs.readFileSync(files[i],"utf-8");
	  fs.writeFile(target[i],data,"utf-8",function(err){
		 if(err) {console.log("写入失败");return}
		if(i>0) wing.window.showInformationMessage("安装成功,请重启Wing");		  
	  });    
  } 

 }
 

 

function init() {

    var statusbaritem = wing.window.createStatusBarItem(wing.StatusBarAlignment.Left);
    statusbaritem.text = "扩展Wing";
    statusbaritem.command = "extension.smalltree";
    statusbaritem.show(); 
}