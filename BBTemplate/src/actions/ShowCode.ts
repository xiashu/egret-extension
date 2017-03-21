import * as wing from 'wing';
 import * as path from 'path';
import TextEditor = wing.TextEditor; 
import Uri = wing.Uri;
import ViewColumn = wing.ViewColumn;
import Range= wing.Range;
import TextEditorDecorationType = wing.TextEditorDecorationType;
  
export function showContent(txtPath:string): void {
   
   let e = wing.window.activeTextEditor;
    if (!e) {
        return;
    }
   
   
   var codePath = path.normalize(eval("__dirname")) + path.sep + "template" + path.sep;
   wing.complexCommands.previewWebView(Uri.file(codePath+txtPath),"代码案例",ViewColumn.Two);
   
}