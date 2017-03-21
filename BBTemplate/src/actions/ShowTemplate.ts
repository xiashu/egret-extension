import * as wing from 'wing';
import * as fs from 'fs';
import * as path from 'path';
import Position = wing.Position;
import TextEditor = wing.TextEditor;
import TextEditorEdit = wing.TextEditorEdit;
 
  
export function showContent(txtPath:string): void {
   
   let e = wing.window.activeTextEditor;
    if (!e) {
        return;
    }
    
     var codePath = path.normalize(eval("__dirname")) + path.sep + "template" + path.sep;
  
     let content = fs.readFileSync(codePath+txtPath, 'utf-8');      
     (<TextEditor>e).edit(function (editBuilder: TextEditorEdit)
     {    
         var pos:Position = new Position(1,0);
         editBuilder.insert(pos,content);    
     });
   
}