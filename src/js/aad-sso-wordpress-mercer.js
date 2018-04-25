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
            AadSsoWordPressMercer.removeAad();
            return;
        }

        // console.log('proceeding');
        AadSsoWordPressMercer.helpWith100vhCss();
        AadSsoWordPressMercer.prependAadToBody();
        AadSsoWordPressMercer.copyAadSsoLinks();
        AadSsoWordPressMercer.removeAadSsoLoginFormText();

    }

    /**
     * Add AADSSO-plugin-generated URLs to this-plugin-generated links
     */
    static copyAadSsoLinks() {
        let aLogin = document.querySelector('.aadsso-login-form-text a[href*="authorize"]');
        let aLogout = document.querySelector('.aadsso-login-form-text a[href*="logout"]');
        let urlLogin = aLogin.getAttribute('href');
        let urlLogout = aLogout.getAttribute('href');
        let aMULogin = document.querySelector('.aad__cta--login');
        let aMULogout = document.querySelector('.aad__cta--logout');
        aMULogin.setAttribute('href', urlLogin);
        aMULogout.setAttribute('href', urlLogout);
    };

    /**
     * Make mobile browsers behave better with 100vh CSS
     *
     * https://brentstromberg.com/jank-free-vh-sections/
     *
     * Adapted to not use jQuery
     */
    static helpWith100vhCss() {

        // $heightOnLoad = $('.vc_row.vc_row-o-full-height.welcome-message-wrapper').height();
        // console.log($heightOnLoad);
        // $(window).resize(function() {
        //     $('body.mobile .vc_row.vc_row-o-full-height.welcome-message-wrapper').css({
        //         'min-height':$heightOnLoad
        //     });
        // });

        let aad = document.querySelector('.aad');
        let height = `${aad.offsetHeight}px`;
        console.log(height);
        aad.style.minHeight = height;
    }

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
    static prependAadToBody() {
        let aad = document.querySelector('.aad');
        let body = document.querySelector('body');
        prependChild(body, aad);
    };

    /**
     * Remove the AAD block
     */
    static removeAad() {
        let aad = document.querySelector('.aad');
        aad.remove();
    }

    /**
     * Remove the AADSSO-plugin-added content
     */
    static removeAadSsoLoginFormText() {
        let aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
        aadssoLoginFormText.remove();
    };

}
