Playlists = function () {
    let playlists = new Meteor.Collection('playlists');

    let schema = new SimpleSchema({
        title: {
            type: String
        },
        createdBy: {
            type: String,
            //TODO Remove optional flag
            optional: true
        }
    });

    playlists.attachSchema(schema);

    if (Meteor.isServer) {
        Meteor.publish('my-playlists', function () {
            //TODO Filter by signed in user id
            return playlists.find();
        });
    }

    return {
        subscribeMyPlaylists() {
            return Meteor.subscribe('my-playlists');
        },
        createPlaylist: new ValidatedMethod({
            name: 'Playlists.createPlaylist',
            validate: schema.validator(),
            run(playlist) {
                playlists.insert(playlist);
            }
        }),
        deletePlaylist: new ValidatedMethod({
            name: 'Playlists.deletePlaylist',
            validate: null,
            run(playlist) {

            }
        }),
        edit: new ValidatedMethod({
            name: 'Playlists.editPlaylist',
            validate: null,
            run(playlist) {

            }
        }),
        getMyPlaylists() {
            return playlists.find().fetch();
        }
    };
}();