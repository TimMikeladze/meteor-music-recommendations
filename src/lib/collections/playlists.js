Collections.Playlists = new Meteor.Collection('playlists');
Schemas.Playlist = new SimpleSchema({
    title: {
        type: String
    },
    createdBy: {
        type: String
    }
});

Collections.Playlists.attachSchema(Schemas.Playlist);