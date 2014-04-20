var tabs = require('tabs');
exports.main = function() {
    tabs.on('close', function () {
        for each (var tab in tabs) {
            if (tab.url == 'about:newtab') {
                tabs.open("about:newtab");        
                break;
            }    
        }
    });
};
