const {IconMenu, IconButton, MenuItem} = MUI;
const {SvgIcons} = MUI.Libs;

Components.VertIconMenu = React.createClass({
    render () {
        return (
            <IconMenu
                iconButtonElement={
          <IconButton><SvgIcons.NavigationMoreVert /></IconButton>
        }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help"/>
                <MenuItem primaryText="Sign out"/>
            </IconMenu>
        );
    }
});