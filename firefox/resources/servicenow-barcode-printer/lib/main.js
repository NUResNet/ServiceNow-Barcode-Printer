var data = require("self").data;
var PageMod = require("page-mod").PageMod;

PageMod({
  include: /^http(s)?:\/\/.*\.service-now\.com.*sysparm_media=print.*/,
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("jquery.js"), data.url("dymo.js"), data.url("sn-plugin.js")],
  onAttach: function (worker) {
    worker.port.emit("init");
  }
}); 
