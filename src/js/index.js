/**
 * @author Todd Sayre
 */

import prependChild from 'prepend-child';
import domLoaded from 'dom-loaded';

/**
 *
 */
const onLoad = function () {
    moveAad();
    copyAadssoLinks();
    removeAadssoLoginFormText();
};

/**
 * Move the `.aad` block out from the `#loginform` form to be the first child of the `body`
 */
const moveAad = function () {
    let aad = document.querySelector('.aad');
    let body = document.querySelector('body');
    prependChild(body, aad);
};

/**
 * Remove the AADSSO-plugin-added content
 */
const removeAadssoLoginFormText = function () {
    let aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
    aadssoLoginFormText.remove();
};

/**
 * Add AADSSO-plugin-generated URLs to this-plugin-generated links
 */
const copyAadssoLinks = function () {
    let aLogin = document.querySelector('.aadsso-login-form-text a[href*="authorize"]');
    let aLogout = document.querySelector('.aadsso-login-form-text a[href*="logout"]');
    let urlLogin = aLogin.getAttribute('href');
    let urlLogout = aLogout.getAttribute('href');
    let aMULogin = document.querySelector('.aad__cta--login');
    let aMULogout = document.querySelector('.aad__cta--logout');
    aMULogin.setAttribute('href', urlLogin);
    aMULogout.setAttribute('href', urlLogout);
};

domLoaded.then(onLoad);
