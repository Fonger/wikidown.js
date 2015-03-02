'use strict';
var c = console;
var fs = require("fs");
var domain = process.argv[2];
var path = 'web/db/'+domain+'/wd/';
var dirFile = path+'directory';
var dirText = fs.readFileSync(dirFile, 'utf8');
c.log("dirText:\n"+dirText);
var linkExp = /(\s)\[\[([^\]]+?)\]\]\((.*?)\)/g;
var match;
while (match = linkExp.exec(dirText)) {
  var title=match[2], file=match[3];
  c.log("title="+title+" file="+file);
}
/*
c.log("innerMatches:\n"+matches);
for (var i in matches) {
  var match = matches[i];
  c.log(match[1]);
}
*/
/*

  md  = md.replace(/(\s)\!\[\[([^\]]*?)\]\]\((.*?)\)/gi, '$1<div class="figure"><img src="db/'+path().domain+'/img/$3"/><p class="caption">$2</p></div>'); // �����Ϥ� ![[text]](file)
  md  = md.replace(/(\s)\[\[([^\]]+?)\]\]\(([^:\)]+):([^:\)]+)\)/gi, '$1<a href="#$3:$4" class="innerLink">$2</a>'); // �����s�� [[text]](file)
  md  = md.replace(/(\s)\[\[([^\]]+?)\]\]\((.*?)\)/gi, '$1<a href="#'+path().domain+':$3" class="innerLink">$2</a>'); // �����s�� [[text]](file)
  md  = md.replace(/(\s)\[\[([^\]:]+):([^\]:]+)\]\]/gi, '$1<a href="#$2:$3" class="innerLink">$2:$3</a>'); // �����s�� [[file]]
  md  = md.replace(/(\s)\[\[([^\]:]+?)\]\]/gi, '$1<a href="#'+path().domain+':$2" class="innerLink">$2</a>'); // �����s�� [[file]]
  md  = md.replace(/(\s)\$\$([^$]+?)\$\$/gi, '$1<script type="math/tex">$2</'+'script>');// �ƾǦ� $$[latex]$$,  ��N�� '</'+'script>' ���}�A�קK�s�����{���O�u�� script �϶�
  return converter.makeHtml(md);

var files = getFiles('web/db/'+domain+'/md');
// console.log(files);
for (var i in files) {
  console.log(files[i]);
}
*/
