const {AppBar} = MUI;

Components.AppBar = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render() {
        return (
            <AppBar
                title="Title"
                iconElementRight={<Components.VertIconMenu />}
            />
        );
    }
});