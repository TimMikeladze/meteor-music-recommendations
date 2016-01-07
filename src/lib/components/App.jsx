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

    getInitialState() {
        return {siteTitle: Meteor.settings.public.siteTitle};
    },

    render() {
        let titleTemplate = this.state.siteTitle + " - %s";
        return (
            <div className="app">
                <ReactHelmet
                    title="Page title"
                    titleTemplate={titleTemplate}
                    base={{"target": "_blank", "href": "http://mysite.com/"}}
                    meta={[
                        {"name": "description", "content": "Music recommendations site"},
                        {"name": "viewport", "content": "width=device-width, initial-scale=1"},
                    ]}
                    link={[
                        {"rel": "stylesheet", "href": "https://fonts.googleapis.com/icon?family=Material+Icons"},
                        {"rel": "stylesheet", "media": "all", "href": "http://fonts.googleapis.com/css?family=Roboto:400,300,500&subset=latin", },
                    ]}
                />
                <AppCanvas>
                    <AppBar title="Title goes here"/>

                    <div style={{paddingTop: '80px'}}>
                        {this.props.yield}
                    </div>
                </AppCanvas>
            </div>
        );
    }
});
