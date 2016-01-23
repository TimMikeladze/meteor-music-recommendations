FlowRouter.route('/', {
    name: 'index',
    action: function() {
        ReactLayout.render(Components.App, {
            yield: <Components.Home />
        });
    }
});
