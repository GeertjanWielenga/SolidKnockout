define([
    'knockout'
],
function (ko) {
    return function initComponents() {
        ko.components.register("header", {require: 'js/modules/header'});
    };
});