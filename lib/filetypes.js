/*globals BT*/

sc_require('file_types/script');
sc_require('file_types/json');
sc_require('file_types/css');
sc_require('file_types/image');

BT.projectManager.registerFileClass("js", BT.ScriptFile);
BT.projectManager.registerFileClass("json", BT.JSONFile);
BT.projectManager.registerFileClass("css", BT.CSSFile);

BT.projectManager.registerFileClass("png", BT.PNGFile);
BT.projectManager.registerFileClass("jpg", BT.JPGFile);
BT.projectManager.registerFileClass("gif", BT.GIFFile);