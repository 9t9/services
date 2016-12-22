import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { configure, setAddon, addDecorator } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import client from '../dev/client';

import 'bluerain-bootstrap-theme/scss/bluerain-bootstrap-theme.scss';

setAddon(infoAddon);

const req = require.context('../src/', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(story => (
  <ApolloProvider client={client}>
    {story()}
  </ApolloProvider>
));

addDecorator(withKnobs);

configure(loadStories, module);
