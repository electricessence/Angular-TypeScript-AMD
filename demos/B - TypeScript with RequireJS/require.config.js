require.config({
    urlArgs: "cacheBust=" + (new Date()).getTime(),
    paths: {
        "angular": "../../bower_components/angular/angular"
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    },
    map: {
        '*': {
            'css': '../../bower_components/require-css/css',
            'text': '../../bower_components/text/text',
            'domready': '../../bower_components/requirejs-domready/domReady'
        }
    },
    config: {
        text: {}
    }
});
//# sourceMappingURL=require.config.js.map