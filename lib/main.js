// The main module of the zurdo1119 Add-on.
var tabs = require('tabs');

exports.main = function() {
    tabs.on('close', function () {
        var newTabCount = 0;
        for each (var tab in tabs) {
            if (tab.url == 'about:newtab') {
                newTabCount++;
                break;
            }    
        }
        if (newTabCount == 0) {
            tabs.open("about:newtab");        
        }
    });

};
