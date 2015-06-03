require.config({
    baseUrl: './',
    paths: {
        knockout: './bower_components/knockout/dist/knockout',
        text: './bower_components/requirejs-text/text',
        initComponents: './js/initComponents'
    },
    waitSeconds: 2
});
require(['knockout', 'initComponents'],
    function (ko, initComponents) {
        ko.applyBindings(new initComponents());
    }
);
