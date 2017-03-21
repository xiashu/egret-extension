import * as wing from 'wing';
import QuickPickItem = wing.QuickPickItem;
import SymbolInformation = wing.SymbolInformation;
import * as ShowTemplate from './actions/ShowTemplate';
import CompletionItemProvider = wing.CompletionItemProvider;
import { ExtensionContext, languages, env,CompletionItemKind,Hover,PopupType,Store,IStoreSchemaMap } from 'wing';
import * as ShowCode from './actions/ShowCode';
 
export function activate(context: ExtensionContext) {
	
	 wing.commands.registerCommand("extension.bbtemplate",showCodeTemplate);
	 
}

interface ActionQuickPickItem extends wing.QuickPickItem {
	action: (str:string) => void;
	path:string;
}


function showCodeTemplate()
{
	 let e = wing.window.activeTextEditor;
    if (!e) {
		wing.window.showWarningMessage("请打开打开文档！");
        return;
    }
	
	var items: ActionQuickPickItem[] = [];
	items.push({ label: "1.Hello Wing-Plug", description: "", action: ShowTemplate.showContent,path:"helloplug.txt" });
	items.push({ label: "2.路径操作", description: "", action: ShowTemplate.showContent,path:"path.txt" });
    items.push({ label: "3.展示菜单", description: "", action: ShowTemplate.showContent,path:"menu.txt" });
	items.push({ label: "4.文件操作", description: "", action: ShowTemplate.showContent,path:"file.txt" });
	items.push({ label: "5.调用exe", description: "", action: ShowTemplate.showContent,path:"callexe.txt" });
	items.push({ label: "6.语法树", description: "", action: ShowTemplate.showContent,path:"tree.txt" });
	items.push({ label: "7.代码案例", description: "", action: ShowCode.showContent,path:"code.html" });
	items.push({ label: "8.插件开发教程", description: "", action: ShowCode.showContent,path:"tour.html" });

	wing.window.showQuickPick(items).then((item) => {
		if (item) {
			item.action(item.path);
		}
	});
 
}


 