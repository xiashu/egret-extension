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

export function register() {
    wing.commands.registerCommand("extension.createfuns", onCmdHandler);   
}

function onCmdHandler() {
    let e = wing.window.activeTextEditor;
    if (!e) {
        return;
    }
	
    let range =(<TextEditor>e).selection;
    let selectStr:string = (<TextDocument>e.document).getText(range);
    let onelineStr:string =(<TextDocument>e.document).lineAt(range.active).text;
       
    //检测方法
   // this.addEventListener(eui.UIEvent.COMPLETE,this.onCreateComplete,this);
      var tempArray = onelineStr.match(/\(.*?,/gi  );
      if(tempArray == null || tempArray [0] == null) 
      {
          if(selectStr)
          {
             selectStr = "\tprivate #1():void{\n\n\n\t}\n".replace("#1",selectStr); 
             createFun(e,range,selectStr);
          } 
          return;
      }
      var str:string = tempArray[0];
      var dot = -1;
       if(str.lastIndexOf('.') != -1)
       {
           dot = str.lastIndexOf('.') ;
       } 
      var eventName:string = str.substring(str.indexOf("(")+1,dot);
      var filters = ["this","("];//过滤一些情况
      if(filters.indexOf(eventName)!=-1)
      {
          dot = -1;
      }

       if(selectStr=="")
       {
           //光标处于函数后面，搜索，号，获取函数名
           
           //构建一个猜测范围
           var character = 0;
           if(range.active.character-50 >0)
           {
               character = range.active.character-50;
           }
           var tempRange = new Range(range.active,new Position(range.active.line,character));
           var tempStr = e.document.getText(tempRange);
           if(tempStr.indexOf(",")!=-1)
           {
               tempStr = tempStr.substring(tempStr.indexOf(",")+1);
               selectStr = tempStr.replace("this.","");
           }       
       }
      
      if(dot!=-1)
      {
          selectStr = "\tprivate #1(event:#2):void {\n\n\n\t}\n".replace("#1",selectStr).replace("#2",eventName);
      }
      else
      {
           selectStr = "\tprivate #1():void {\n\n\n\t}\n".replace("#1",selectStr);
      }
     // console.log("复制对应的函数"+selectStr);
          
      wing.complexCommands.executeDocumentSymbolProvider(e.document.uri).then((item:SymbolInformation[])=>{
        
        // console.log(item);
        // console.log(JSON.stringify(item));
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