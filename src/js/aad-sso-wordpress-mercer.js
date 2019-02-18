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
    if (!AadSsoWordPressMercer.isAadSsoWordPressPresent()) {
      console.error('Abandoning');
      // AadSsoWordPressMercer.removeSso();
      return;
    }

    console.info('Proceeding');
    AadSsoWordPressMercer.prependSsoToBody();
    // AadSsoWordPressMercer.copyAadSsoLinks();
    // AadSsoWordPressMercer.removeAadSsoLoginFormText();
  }

  /**
   * Add AADSSO-plugin-generated URLs to this-plugin-generated links
   */
  // static copyAadSsoLinks() {
  //   const aadSsoLoginFormTextLogin = document.querySelector(
  //     '.aadsso-login-form-text a[href*="authorize"]'
  //   );
  //   const aadSsoLoginFormTextLogout = document.querySelector(
  //     '.aadsso-login-form-text a[href*="logout"]'
  //   );
  //   const urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');
  //   const urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');
  //   const ctaLogin = document.querySelector('.cta--login');
  //   const ctaLogout = document.querySelector('cta--logout');
  //   if (null !== ctaLogin) {
  //     ctaLogin.setAttribute('href', urlLogin);
  //   }
  //   if (null !== ctaLogout) {
  //     ctaLogout.setAttribute('href', urlLogout);
  //   }
  // }

  /**
   *
   */
  static isAadSsoWordPressPresent() {
    const aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
    return null !== aadssoLoginFormText;
  }

  /**
   * Move the `.aad` block out from the `#loginform` form to be the first child of the `body`
   */
  static prependSsoToBody() {
    const sso = document.querySelector('.c-sso');
    prependChild(document.body, sso);
  }

  /**
   * Remove the AAD block
   */
  // static removeSso() {
  //   const sso = document.querySelector('.c-sso');
  //   sso.remove();
  // }

  /**
   * Remove the AADSSO-plugin-added content
   */
  // static removeAadSsoLoginFormText() {
  //   const aadssoLoginFormText = document.querySelector('.aadsso-login-form-text');
  //   aadssoLoginFormText.remove();
  // }
}
