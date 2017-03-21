import * as wing from 'wing';
 
//收录一些监听提示
export function register() {

    wing.commands.registerCommand("extension.tiphelp", onCmdHandler);
     wing.languages.registerCompletionItemProvider('typescript', new EgretCompletionItemProvider2());
}
 

function onCmdHandler() {
// wing.window.showInformationMessage("可以简短一点输出事件，收录常用的事件行为");
 
  let e = wing.window.activeTextEditor;
    if (!e) 
    {
        return;
    } 
  var pos  = wing.window.activeTextEditor.selection.active;
  
}
 

import {CompletionItemProvider, CompletionItem, CompletionItemKind, CancellationToken, TextDocument, Position} from 'wing';
import globals = require('./EgretGlobals');
    

export default class EgretCompletionItemProvider2 implements CompletionItemProvider {
 
 
	public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): Promise<CompletionItem[]> {	    	let result: CompletionItem[] = [];
		var range  = document.getWordRangeAtPosition(position);
		var prefix = range ? document.getText(range) : '';

		var added : any = {};
		var createNewProposal = function(kind: CompletionItemKind, name: string, entry: globals.IEntry) : CompletionItem  {
			var proposal : CompletionItem = new CompletionItem(name);
			proposal.kind = kind;
			if (entry) {
				if (entry.description) {
					proposal.documentation= entry.description;
				}
				if (entry.signature) {
					proposal.detail = entry.signature;
				}
			}
			proposal.insertText = entry.signature;
			return proposal;
		};

		var matches = (name:string) => {
			return prefix.length === 0 || name.length > prefix.length && name.substr(0, prefix.length) === prefix;
		};

		for (var name in globals.globalfunctions) {
			if (globals.globalfunctions.hasOwnProperty(name) && matches(name)) {
				added[name] = true;
 				result.push(createNewProposal(CompletionItemKind.Function, name, globals.globalfunctions[name]));
			}
		}
 
     
       var obj={};
       for(var i = 0 ; i<result.length;i++)
       {
            var code = {};
            code['prefix'] = result[i].label;
            code['body'] = [result[i].detail];
            code['description'] = result[i].documentation;
            obj[result[i].label]=code;
          
       }

     console.log(JSON.stringify(obj));

     
    return Promise.resolve(result);
 
}
}