require.config({
    baseUrl: './',
    paths: {
        knockout: './js/libraries/knockout/dist/knockout',
        text: './js/libraries/requirejs-text/text',
        jquery: './js/libraries/jquery/dist/jquery',
        initComponents: './js/initComponents'
    },
    waitSeconds: 2
});
require(['knockout', 'initComponents'],
    function (ko, initComponents) {
        ko.applyBindings(new initComponents());
    }
);
