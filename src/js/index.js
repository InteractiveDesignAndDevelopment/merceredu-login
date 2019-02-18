/**
 * @author Todd Sayre
 */

'use strict';

import { contentLoaded } from 'document-promises';
import AadSsoWordPressMercer from './aad-sso-wordpress-mercer';

import '../scss/main.scss';

contentLoaded.then(() => {
  new AadSsoWordPressMercer();
});
