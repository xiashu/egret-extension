import * as wing from 'wing';
 
import {SymbolInformation,SymbolKind,Position,TextEditorEdit,TextEditor } from 'wing';


export function register() {

    wing.commands.registerCommand('extension.showcomment', onCmdHandler);
}


function onCmdHandler() 
{
    let e = wing.window.activeTextEditor;
    if (!e)
    {
       return;
    }
   
   
   //获取光标所在的行数，然后判断下一行的语法树是如何操作，kind的类型是函数还是变量，抽离出括号内的变量，是函数有参数则提供变量
//是函数则设置普通的功能即可
     
    wing.complexCommands.executeDocumentSymbolProvider(e.document.uri).then((item:SymbolInformation[])=>{
        
		 //是一个数组，里面包含了语法树里面结构内容，插件里面的数据可以很方便实现一些特殊的功能
        // console.log(item);
        // console.log(JSON.stringify(item));
         var curline:number = e.selection.active.line+1;
         var kind:string ='none';
         var nextStr:string = "";
         for (var i = 0; i < item.length; i++) 
         {
             var element = item[i];
             if(curline == element.location.range.start.line)
             {
                  if(element.kind == SymbolKind.Method)
                 {
                    //获取当行内容
                    nextStr = e.document.lineAt(curline).text;
                    kind ='method';
                    break;
                 } 
                 else if(element.kind == SymbolKind.Property)
                 {
                     kind = "property";
                     break;
                 }                
             }
         }
         
         var targetStr:string = "";
         if(kind=='none' || kind=='property')
         {
             targetStr ="    /**\n     *\n     */";
         }
         else
         {
             targetStr = getComment(nextStr);
         }
         
        (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
        {    
            var pos:Position = new Position(e.selection.active.line,0);
            editBuilder.insert(pos,targetStr);    
        });
	 });
     
     return null;
}


function  getRealStr(params:string) {
     var str="";
     var index = 0;
     while (params.length >index)
     {        
         if(params.charAt(index)!="")
         {
             str+=params[index];
         }
         index++;
     }
   return str;
}


//分拆一行的内容
function getComment(params:string):string {
    
 
   // if(params.indexOf(",")==-1) return "    /**\n     *\n     */";
    
    //获取括号内的内容
   var selectStr = params.substring(params.indexOf("(")+1,params.lastIndexOf(")"));  
   var allData =[];
   if(selectStr.indexOf(",")!=-1)
   {
       allData = selectStr.split(",");
   }
   else
   {
        if(getRealStr(selectStr)!="")
        {
        allData = [selectStr];
        }   
   }
   var param:string = "     * @param ";
   var callBack:string = "     * @param ";
   var comments:string  = "";
   for (var i = 0; i < allData.length; i++) 
   {
       var element = allData[i];
       if(element.indexOf("(") != -1) // 判断有函数回调
       {
            if(element.indexOf(":")!=-1)
            {
                  var funcParam = element.substring(0,element.indexOf(":"));
                  comments +=(callBack + funcParam.trim()+" callback\n");
            }
            else
            {
                  comments +=(callBack + element.trim()+" callback\n");
            }          
       }
       else
       {    //判断有无冒号
            if(element.indexOf(":")!=-1)
            {
                  var funcParam = element.substring(0,element.indexOf(":"));
                  comments +=(param + funcParam.trim()+"\n");
            }
            else
            {
                 comments +=(param + element.trim()+"\n");
            }                
       }             
   }
   
   var result = "    /**\n     *\n#1     */";
   result = result.replace("#1",comments);
   return result;
}