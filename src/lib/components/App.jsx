injectTapEventPlugin();

const { AppCanvas, AppBar, Styles } = MUI;
const { ThemeManager, LightRawTheme } = Styles;

Components.App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {
        return (
            <AppCanvas>
                <AppBar title="Title goes here"/>

                <div style={{padding: '80px'}}>
                    {this.props.content}
                </div>
            </AppCanvas>
        );
    }
});
