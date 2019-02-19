import { contentLoaded } from 'document-promises';
import prependChild from 'prepend-child';

import '../scss/main.scss';

const isAadSsoWordPressPresent = () => null !== document.querySelector('.aadsso-login-form-text');

const prependSsoToBody = () => prependChild(document.body, document.querySelector('.c-sso'));

const removeSso = () => document.querySelector('.c-sso').remove();

const removeAadSsoLoginFormText = () => document.querySelector('.aadsso-login-form-text').remove();

const copyAadSsoLinks = () => {
  const aadSsoLoginFormTextLogin = document.querySelector(
    '.aadsso-login-form-text a[href*="authorize"]'
  );
  const aadSsoLoginFormTextLogout = document.querySelector(
    '.aadsso-login-form-text a[href*="logout"]'
  );
  const urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');
  const urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');
  const ctaLogin = document.querySelector('.c-sso__button--yes');
  // const ctaLogout = document.querySelector('cta--logout');
  if (null !== ctaLogin) {
    ctaLogin.setAttribute('href', urlLogin);
  }
  // if (null !== ctaLogout) {
  //   ctaLogout.setAttribute('href', urlLogout);
  // }
};

contentLoaded.then(() => {
  if (!isAadSsoWordPressPresent()) {
    console.error('Abandoning');
    removeSso();
    return;
  }
  console.info('Proceeding');
  prependSsoToBody();
  copyAadSsoLinks();
  removeAadSsoLoginFormText();
});
