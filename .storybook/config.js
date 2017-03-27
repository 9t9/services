import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

import 'bluerain-bootstrap-theme/dist/css/bluerain-bootstrap-theme-full.min.css';

setAddon(infoAddon);

const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
