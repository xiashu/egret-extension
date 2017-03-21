

import * as wing from 'wing';
import * as path from 'path';
import * as fs from 'fs';

import Window = wing.window;
import complexCommands=wing.complexCommands
import QuickPickItem = wing.QuickPickItem;
import Document = wing.TextDocument;
import Position = wing.Position;
import Range = wing.Range;
import Selection = wing.Selection;
import TextDocument = wing.TextDocument;
import TextEditor = wing.TextEditor;
import TextEditorEdit = wing.TextEditorEdit;
import TextEdit = wing.TextEdit;
import Uri = wing.Uri;
import InputBoxOptions = wing.InputBoxOptions;
import SymbolInformation = wing.SymbolInformation;
import SymbolKind = wing.SymbolKind; 

 ///获取插件位置
export function register() {
    wing.commands.registerCommand("extension.clickfun", onCmdHandler);
}

 
function onCmdHandler() {
  
   //跳转到插件安装目录
    let e = wing.window.activeTextEditor;
    if (!e) 
    {
        return;
    }
 //预判最后一行的目标位
    var targetPos:Position = e.selection.active;
    let range =(<TextEditor>e).selection;
    let selectStr:string = (<TextDocument>e.document).getText(range);
    
    if(selectStr)
    {
        selectStr = "\tprivate #1():void{\n\n\t}\n".replace("#1",selectStr);
        createFun(e,range,selectStr);
    }
}


function createFun(e,range,selectStr) {
    
 wing.complexCommands.executeDocumentSymbolProvider(e.document.uri).then((item:SymbolInformation[])=>{
        
 
        if(!item) return;
       
            //找到对应语法树的位置，寻求可以插入的行数   
            var isflag = false;        
             for (var i = 0; i < item.length; i++) 
             {
                   var element = item[i];
                   if(element.kind !=SymbolKind.Class && range.active.line > element.location.range.start.line && range.active.line < element.location.range.end.line )
                   {
                       isflag = true;
                       break;
                   }                                   
             }
         
           if(!isflag) return;
            
           //找到相同的模块         
            var targetlement:SymbolInformation = element;
            if(!targetlement)
            {
                console.log("该命令执行错误");
                return;
            } 
       
            var obj:Range= targetlement.location.range;
            
            //预判最后一行的目标位
            var targetPos:Position = new Position(obj.end.line, obj.end.character+1);
            
            (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
            {                   
                 editBuilder.insert(targetPos,"\n\n"+selectStr);  
            }); 
             
    }) ;

}

 
