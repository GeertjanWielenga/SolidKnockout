require.config({
    baseUrl: './',
    paths: {
        knockout: './js/libraries/knockout/dist/knockout',
        text: './js/libraries/requirejs-text/text',
        jquery: './js/libraries/jquery/dist/jquery',
        response: './js/libraries/responsejs/response',
        foundation: './js/libraries/foundation/js/foundation',
        initComponents: './js/initComponents'
    },
    // Shim configuration for modules that do not expose AMD:
    shim : {
        'response':{
            deps: ['jquery']
        },  
        'foundation':{
            deps: ['jquery']
        }
    },
    waitSeconds: 2
});
require(['knockout', 'initComponents', 'response', 'foundation'],
    function (ko, initComponents) {
        $(document).foundation();
        var self = this;
        self.weAreSmall = ko.observable();
        Response.create({
            breakpoints: [0, 480, 481]
        });
        Response.action(function() {
             if (Response.band(0, 480)){
                 self.weAreSmall(true);
             } else {
                 self.weAreSmall(false);
             }
        });
        ko.applyBindings(new initComponents());
    }
);