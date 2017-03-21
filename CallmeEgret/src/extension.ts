import * as wing from 'wing';
import * as path from 'path';
var filelist = require('./cmd/EgretShowFileList');
var thisme = require('./cmd/EgretThisMe');
var pos = require('./cmd/EgretPos');
var gif = require('./cmd/EgretPlugGIF');
var comment = require('./cmd/EgretComment');
var funs = require('./cmd/EgretCreateFuns');
var copyline = require('./cmd/EgretCopyLine');
var delline = require('./cmd/EgretDelLine');
var egretGo = require('./cmd/EgretGo');

var codePath = path.normalize(eval("__dirname")) + path.sep;
 
//插件模板
export function activate() {

   initCmd();
}

function initCmd() 
{
    thisme.register();
	filelist.register();	
	pos.initPath(codePath);
	pos.register();	
	gif.initPath(codePath);
	gif.register();
	comment.register();
	funs.register();
	copyline.register();
	egretGo.register();
	delline.register();

}