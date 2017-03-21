import {TextEditor,Position,Range,TextEditorEdit} from "wing";

export function getTargetPos(e:TextEditor,endPos:Position)
{
        
        var beforePos = new Position(endPos.line,endPos.character-1);
        var testRange = new Range(beforePos,endPos);
        var selectStr = e.document.getText(testRange);
        if(selectStr ==" " || selectStr =="" || selectStr =="(" || selectStr ==",")
        {
            //向前搜索，递归一个符号，然后终止
            return endPos;  
        }
        else
        {
           return  getTargetPos(e,beforePos);
        }  
 }
    
    
 //插件助手   
 export default class WingManager
 {
     
     constructor()
     {      
         
     }
     
     //获取当前选择的文本
     public getSelectText():string
     {
         
         
         return "";
     }
     
     
    /**
     * 获取当前的文本内容
     */     
     public getTextLine():string
     {
         
         
         return "";
     }
     
     
    /**
     * 打开一个网页
     */     
     public openWebView(url:string):void
     {
         
         
         
     }
     
     
     
     
   
 }