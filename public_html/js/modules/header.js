define([], function () {
    function MenuBarModel(params) {
        this.menus = [];
        for (var key in params) {
            if (key.substring(0, 3)===('tab')) {
                this.menus.push(params[key]);
            }
        }
    }
    return {
        viewModel: MenuBarModel,
        template: {
            require: 'text!templates/header.tmpl.html'
        }
    };
});

