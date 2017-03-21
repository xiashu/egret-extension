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
    wing.commands.registerCommand("extension.delline", onCmdHandler);
}

function onCmdHandler() 
{
   
    let e = wing.window.activeTextEditor;
    if (!e) 
    {
        return;
    }
   
    var range:Selection = (<TextEditor>e).selection;
    var  curRange:Range;
    
     if(range.active.isEqual(range.anchor))
    {
        curRange = e.document.lineAt(range.active).range;//同一行
    }
    else
    {
          //不同一行
          if(range.active.isAfter(range.anchor))
          {
                curRange = new Range(new Position(range.anchor.line,0),new Position(range.active.line,500));
          }
         else   if(range.active.isBefore(range.anchor))
         {
               curRange = new Range(new Position(range.active.line,0),new Position(range.anchor.line,500));
         }         
    }
     
 
     //删除一行或者多行   
     (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
     {                              
         editBuilder.delete(curRange);    
     });   
}