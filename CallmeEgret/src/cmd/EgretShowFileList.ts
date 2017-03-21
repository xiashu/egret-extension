import * as wing from 'wing';
import * as path from 'path';
import * as fs from 'fs';
 
 //展示项目所有文件资源大小
export function register() 
{
    wing.commands.registerCommand("extension.showsize", onCmdHandler);
}

function onCmdHandler()
{
    let e = wing.window.activeTextEditor;
    if (!e) 
    {
        wing.window.showWarningMessage("请打开文档");
        return;
    }
    
    let path =  wing.workspace.rootPath;
  
    var filesList = geFileList(path);
    filesList.sort(sortHandler); 
        var str='';
    for(var i=0;i<filesList.length;i++)
    {
       var item = filesList[i];
       var desc ="<tr align=\"left\"><th>"+item['name'] + " </th> "
            +"<th>"+(item['size']/1024).toFixed(2) +"/kb"+" </th> "
            +"<th>"+item['path']+'</th></tr>';
       str+=desc +"\n"
    }
 
    saveHtml(path,str);
}


 function saveHtml(path:string,str:string) 
 {
  
 var html:string ='<!DOCTYPE html><html><head><meta charset="UTF-8"><title></title></head><style type="text/css">.bg{background-color:#f8f8f8} table{border: 1px solid #999999;border-collapse: collapse;}th{border-bottom: 1px	solid #999999;height=30px;line-height:30px;}body{margin:0 auto;width:100%;text-align: center;color:#666666}</style><body><div class="bg"><table border="1" style="width:100%" ><tr align="center"><th>文件名</th><th>大小</th><th>路径</th> </tr> '+str+'</body></table></div></html>';
    writeFile(path+"/size.html",html);
 }



function geFileList(path)
{
   var filesList = [];
   readFile(path,filesList);
   return filesList;
}

//遍历读取文件
function readFile(path,filesList)
{
   var files = fs.readdirSync(path);//需要用到同步读取
   files.forEach(walk);
   function walk(file)
   {  
       var states = fs.statSync(path+'/'+file);         
        if(states.isDirectory())
        {
            readFile(path+'/'+file,filesList);
        }
        else
        {   
            //创建一个对象保存信息
            var obj = new Object();
            obj['size'] = states.size;//文件大小，以字节为单位
            obj['name'] = file;//文件名
            obj['path'] = path+'/'+file; //文件绝对路径
            filesList.push(obj);
        }     
    }
}

//写入文件utf-8格式
function writeFile(fileName,data)
{  
  fs.writeFile(fileName,data,'utf-8',complete);
  function complete(err)
  {
      if(!err)
      {
          console.log("文件生成成功");
          openBrower();
      }   
  } 
}


function sortHandler(a,b)
{
  if(a['size'] > b['size'])
   return -1;
  else if(a['size']< b['size']) return 1
   return 0;
}

function openBrower()
{
  let e = wing.window.activeTextEditor;
  if (!e)  
  {  
    return;
  } 
//   let path =  wing.workspace.rootPath;
//   var c_process = require('child_process');
//   var spawn = c_process.spawn;
//   spawn("cmd.exe",['/c',path+"size.html"]);   

  let filePath =  wing.workspace.rootPath +"/size.html";  
  wing.commands.executeCommand("vscode.previewHtml",wing.Uri.file(filePath));
    
}
