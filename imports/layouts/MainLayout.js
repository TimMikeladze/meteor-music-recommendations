import React from 'react';
import Helmet from 'react-helmet';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Fix React tap delays in iOS
// Read about it here: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const title = Meteor.settings.public.TITLE || 'Title';

const MainLayout = ({ children }) => (
  <div className="main-layout">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Description of site content goes here' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ]}
    />
    <div className="container">
      {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.element,
};

export default MainLayout;
