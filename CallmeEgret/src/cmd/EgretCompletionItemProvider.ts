'use strict';
import * as wing from 'wing';
import {CompletionItemProvider, CompletionItem, CompletionItemKind, CancellationToken, TextDocument, Position} from 'wing';
import globals = require('./EgretGlobals');
    

export default class EgretCompletionItemProvider implements CompletionItemProvider {
 
    

	public provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): Promise<CompletionItem[]> {
	
    	let result: CompletionItem[] = [];
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
	 
    return Promise.resolve(result);
 
}
}