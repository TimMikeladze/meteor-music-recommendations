Playlists = function () {
    if (Meteor.isServer) {
        Meteor.publish('my-playlists', function () {
            //TODO Filter by signed in user id
            return Collections.Playlists.find();
        });
    }

    Meteor.methods({
        'Playlists.createPlaylist': function(playlist) {

        }
    });

    return {
        createPlaylist() {
            Meteor.call('Playlists.createPlaylist');
        }
    };
}();