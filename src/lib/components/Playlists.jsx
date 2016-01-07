const { List, ListItem} = MUI;

Components.Playlists = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var data = {};
        var handle = Playlists.subscribeMyPlaylists();
        if (handle.ready()) {
            data.playlists = Playlists.getMyPlaylists();
        }
        return data;
    },
    render() {
        return (
            <List>
                {this.data.playlists && this.data.playlists.map((playlist) => {
                    return <ListItem key={playlist._id} primaryText={playlist.title}/>
                    })}
            </List>
        );
    }
});
