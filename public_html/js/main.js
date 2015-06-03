require.config({
    baseUrl: './',
    paths: {
        knockout: './bower_components/knockout/dist/knockout',
        text: './bower_components/requirejs-text/text',
        jquery: './bower_components/jquery/dist/jquery',
        initComponents: './js/initComponents'
    },
    waitSeconds: 2
});
require(['knockout', 'initComponents'],
    function (ko, initComponents) {
        ko.applyBindings(new initComponents());
    }
);
