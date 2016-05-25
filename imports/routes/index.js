import React from 'react';
import { Route } from 'react-router';

import MainLayout from '../layouts/MainLayout';

export default () => (
  <Route path="/" component={MainLayout} />
);
