/**
 * @author Todd Sayre
 */

'use strict';

import domLoaded from 'dom-loaded';
import AadSsoWordPressMercer from './aad-sso-wordpress-mercer';

const onLoad = function () {
    new AadSsoWordPressMercer();
};

domLoaded.then(onLoad);
