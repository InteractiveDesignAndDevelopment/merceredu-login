/**
 * @author Todd Sayre
 */

'use strict';

import domLoaded from 'dom-loaded';
import AadSsoWordPressMercer from './aad-sso-wordpress-mercer';

// This isn't going to work as an `import`
require('viewport-units-buggyfill').init();

const onLoad = function () {
    new AadSsoWordPressMercer();
};

domLoaded.then(onLoad);
