Collections.Playlists = new Meteor.Collection('playlists');

Collections.Playlists.attachSchema(new SimpleSchema({
    title: {
        type: String
    },
    createdBy: {
        type: String,
        //TODO Remove optional flag
        optional: true
    }
}));