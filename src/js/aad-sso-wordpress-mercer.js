/**
 * @author Todd Sayre
 */

'use strict';

import prependChild from 'prepend-child';

export default class AadSsoWordPressMercer {

    /**
     * construct it after DOMContentLoaded because this rearranges the markup
     */
    constructor() {

        if (! AadSsoWordPressMercer.isAadSsoWordPressPresent()) {
            // console.log('abandoning');
            AadSsoWordPressMercer.removeSso();
            return;
        }

        // console.log('proceeding');
        AadSsoWordPressMercer.prependSsoToBody();
        AadSsoWordPressMercer.copyAadSsoLinks();
        AadSsoWordPressMercer.removeAadSsoLoginFormText();

    }

    /**
     * Add AADSSO-plugin-generated URLs to this-plugin-generated links
     */
    static copyAadSsoLinks() {
        let aadSsoLoginFormTextLogin = document.querySelector('.aadsso-login-form-text a[href*="authorize"]');
        let aadSsoLoginFormTextLogout = document.querySelector('.aadsso-login-form-text a[href*="logout"]');
        let urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');
        let urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');
        let ctaLogin = document.querySelector('.cta--login');
        let ctaLogout = document.querySelector('cta--logout');
        if (null !== ctaLogin) {
            ctaLogin.setAttribute('href', urlLogin);
        }
        if (null !== ctaLogout) {
            ctaLogout.setAttribute('href', urlLogout);
        }
    };

    /**
     *
     */
    static isAadSsoWordPressPresent() {
        let aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
        // console.log(aadssoLoginFormText);
        // console.log(null !== aadssoLoginFormText);
        return null !== aadssoLoginFormText;
    }

    /**
     * Move the `.aad` block out from the `#loginform` form to be the first child of the `body`
     */
    static prependSsoToBody() {
        let sso = document.querySelector('.sso');
        let body = document.querySelector('body');
        prependChild(body, sso);
    };

    /**
     * Remove the AAD block
     */
    static removeSso() {
        let sso = document.querySelector('.sso');
        sso.remove();
    }

    /**
     * Remove the AADSSO-plugin-added content
     */
    static removeAadSsoLoginFormText() {
        let aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
        aadssoLoginFormText.remove();
    };

}
