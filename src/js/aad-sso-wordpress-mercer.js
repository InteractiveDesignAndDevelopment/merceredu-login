/**
 * @author Todd Sayre
 */

'use strict';

import prependChild from 'prepend-child';

export default class AadSsoWordPressMercer {

    /**
     * construct it after DOMContentLoaded because this rearranges the markup
     */
    constructor () {
        AadSsoWordPressMercer.prependAadToBody();
        AadSsoWordPressMercer.copyAadSsoLinks();
        AadSsoWordPressMercer.removeAadSsoLoginFormText();
    }

    /**
     * Move the `.aad` block out from the `#loginform` form to be the first child of the `body`
     */
    static prependAadToBody () {
        let aad = document.querySelector('.aad');
        let body = document.querySelector('body');
        prependChild(body, aad);
    };

    /**
     * Remove the AADSSO-plugin-added content
     */
    static removeAadSsoLoginFormText () {
        let aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
        aadssoLoginFormText.remove();
    };

    /**
     * Add AADSSO-plugin-generated URLs to this-plugin-generated links
     */
    static copyAadSsoLinks () {
        let aLogin = document.querySelector('.aadsso-login-form-text a[href*="authorize"]');
        let aLogout = document.querySelector('.aadsso-login-form-text a[href*="logout"]');
        let urlLogin = aLogin.getAttribute('href');
        let urlLogout = aLogout.getAttribute('href');
        let aMULogin = document.querySelector('.aad__cta--login');
        let aMULogout = document.querySelector('.aad__cta--logout');
        aMULogin.setAttribute('href', urlLogin);
        aMULogout.setAttribute('href', urlLogout);
    };
}