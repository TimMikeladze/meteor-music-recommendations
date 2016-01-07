const { Tabs, Tab } = MUI;

const styles = {
    slide: {
        padding: 10
    }
};

Components.Home = React.createClass({
    getInitialState() {
        return {
            slideIndex: 0
        }
    },

    handleChange(value) {
        this.setState({
            slideIndex: value
        });
    },
    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}>
                    <Tab label="Feed" value={0}/>
                    <Tab label="Playlists" value={1}/>
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}>
                    <div>
                        <Components.Feed />
                    </div>
                    <div style={styles.slide}>
                        <Components.Playlists />
                    </div>
                </SwipeableViews>
            </div>
        );
    }
});
