import React from 'react';
import { IndexRedirect, Route } from 'react-router';
import {
  App,
  NotFound,
  Form1Container,
  Form2Container,
} from 'containers';

export default () => (
  <Route component={App} path="/">
    <IndexRedirect to="form1" />
    <Route component={Form1Container} path="form1" />
    <Route component={Form2Container} path="form2" />
    <Route component={NotFound} path="*" status={404} />
  </Route>
);
