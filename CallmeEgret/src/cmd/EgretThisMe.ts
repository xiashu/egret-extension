import * as wing from 'wing';
import * as fs from 'fs';
 
import Position = wing.Position;
import Range = wing.Range;
import Selection = wing.Selection;
import TextDocument = wing.TextDocument;
import TextEditor = wing.TextEditor;
import TextEditorEdit = wing.TextEditorEdit;
import TextEdit = wing.TextEdit;
 
export function register() {
    wing.commands.registerCommand("extension.showthis", onCmdHandler);
}

//从右向左寻找一个空格位置返回


function onCmdHandler() {
    let e = wing.window.activeTextEditor;
    if (!e) {
        return;
    }
    
  
     var range =(<TextEditor>e).selection;
     (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
     {    
           
            var pos:Position ;
            if(range.active.isAfter(range.anchor))
            {
              //有选择的区域  
               pos = new Position(range.anchor.line,range.anchor.character);  
              // console.log("左向右选择一个区域");
            }
            else if(range.active.isBefore(range.anchor))
            {
                  pos = new Position(range.active.line,range.active.character); 
                 // console.log("右向左选择一个区域"); 
            }
            else if(range.active.isEqual(range.anchor))
            {
                
                //相等的情况下，补全代码，变量区域【左右】判断
                //光标在变量前面 【光标var】
                var testRange = new Range(range.active,new Position(range.active.line,range.active.character+1))
                var targetStr = e.document.getText(testRange);
                var filterArray  =[" ","","(",";",",",")","]","}","="];//过滤右边第一个字符
           
                if(filterArray.indexOf(targetStr)==-1)
                {
                    pos = new Position(range.active.line,range.active.character);
                   // console.log("光标在字母变量前面");
                }
                else
                {
                     //光标在变量后面 【var光标】把光标移到var位置 然后插入，这里要有一个规则                      
                     var newPos = offsetPos(range.active);                   
                     pos = getTargetPos(e,newPos);
                   //  console.log("光标在字母变量后面"+JSON.stringify(pos));
                }                    
            }
         
         editBuilder.replace(pos,"this.");    
     });
   
}

//光标遇到带括号的函数情况，左偏移位置来寻求位置
function offsetPos(pos:Position) {
    
    //不能出现负数
    if(pos.character == 0) return pos;
     var testRange1 = new Range(pos,new Position(pos.line,pos.character-1));   
     var targetStr1 = wing.window.activeTextEditor.document.getText(testRange1)
      if(targetStr1!=")"  && targetStr1!="(")
      {
           // 当光标插入 ui()光标 这里的情况
          return pos;
      }
      else if(targetStr1=="(")
      {
          // 当光标插入ui(光标) 这里的情况 括号内的情况
          return new Position(pos.line,pos.character-1);
      }
    
     var testRange2 = new Range(pos,new Position(pos.line,pos.character-2));   
     var targetStr2 = wing.window.activeTextEditor.document.getText(testRange2);
     if(targetStr2 == "()")
     {
          // 当光标插入ui()光标 这里的情况
         return  new Position(pos.line,pos.character-2);  
     }
     var testRange3 = new Range(pos,new Position(pos.line,pos.character-3));  
     var targetStr3 = wing.window.activeTextEditor.document.getText(testRange3);
     if(targetStr3 == "( )")
     {
           // 当光标插入ui( )光标 这种就是代码不规范的问题了
         return  new Position(pos.line,pos.character-3);  
     }
      
     var testRange4 = new Range(pos,new Position(pos.line,pos.character-4));
     var targetStr4 = wing.window.activeTextEditor.document.getText(testRange4);
     if(targetStr4 == "(  )")
     {
         // 当光标插入ui(  )光标 这里的情况，这种就是代码不规范的问题了
         return  new Position(pos.line,pos.character-4);  
     }
     
     return pos;
}


//向左边搜索一些特殊的字符用于可以插入this的操作
function getTargetPos(e:TextEditor,endPos:Position)
{
        //当字母顶到左边的时候，返回第一列位置
        if(endPos.character ==0) return endPos;  
        var beforePos = new Position(endPos.line,endPos.character-1);
        var testRange = new Range(beforePos,endPos);
        var selectStr = e.document.getText(testRange);
        if(selectStr ==" " || selectStr =="" || selectStr =="(" || selectStr =="," ||selectStr ==";"|| selectStr =="=" ||selectStr =="["
        ||selectStr =="{")
        {
            //向前搜索，递归一个符号，然后终止
            return endPos;  
        }
        else
        {
           return  getTargetPos(e,beforePos);
        }  
 }
 
 
 //情况列举
 //this.textField.textAlign =textField(光标位置); 等号靠近变量的情况
 //setFun()(光标位置); 光标在括号后面的情况
 //setFun(光标位置);  光标在括号内面的情况
 //var obj[光标在中括号的情况]  变量设值在中括号的情况
 
 //function play(){playBtn（光标位置）} 变量靠近大括号的情况