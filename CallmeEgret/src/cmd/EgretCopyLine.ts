import * as wing from 'wing';
 
import Window = wing.window;
import QuickPickItem = wing.QuickPickItem;
import Document = wing.TextDocument;
import Position = wing.Position;
import Range = wing.Range;
import Selection = wing.Selection;
import TextDocument = wing.TextDocument;
import TextEditor = wing.TextEditor;
import TextEditorEdit = wing.TextEditorEdit;
import TextEdit = wing.TextEdit;
 

export function register() 
{
    wing.commands.registerCommand("extension.copyline", onCmdHandler);
}

function onCmdHandler() 
{
   
    let e = wing.window.activeTextEditor;
    if (!e) 
    {
        return;
    }
   
    var range:Selection = (<TextEditor>e).selection;
    let selectStr:string   =(<TextDocument>e.document).lineAt(range.anchor).text;
  
    if(selectStr =="") return; 
    var pos:Position = null;
         //判断光标是在选中之后
    if(range.active.isAfter(range.anchor))
    {
       pos = new Position(range.anchor.line,0);  
    }
    else
    {
        pos = new Position(range.active.line,0);  
    }
    
     (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
     {                              
         editBuilder.insert(pos,selectStr+"\n");    
     });   
}