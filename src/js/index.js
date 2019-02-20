import { contentLoaded } from 'document-promises';
import prependChild from 'prepend-child';

import '../scss/main.scss';

const isAadSsoWordPressPresent = () => null !== document.querySelector('.aadsso-login-form-text');

const prependSsoToBody = () => prependChild(document.body, document.querySelector('.c-sso'));

const removeSso = () => document.querySelector('.c-sso').remove();

const removeAadSsoLoginFormText = () => document.querySelector('.aadsso-login-form-text').remove();

const focusWpUserLoginField = () => document.querySelector('#user_login').focus();

const focusAadLoginButton = () => document.querySelector('.c-aad-login__button--log-in').focus();

const copyAadSsoLinks = () => {
  const aadSsoLoginFormTextLogin = document.querySelector(
    '.aadsso-login-form-text a[href*="authorize"]'
  );
  const aadSsoLoginFormTextLogout = document.querySelector(
    '.aadsso-login-form-text a[href*="logout"]'
  );
  const urlLogin = aadSsoLoginFormTextLogin.getAttribute('href');
  const urlLogout = aadSsoLoginFormTextLogout.getAttribute('href');
  const ssoLogInButton = document.querySelector('.c-aad-login__button--log-in');
  const ssoLogOutButton = document.querySelector('.c-aad-login__button--log-out');
  if (null !== ssoLogInButton) {
    ssoLogInButton.setAttribute('href', urlLogin);
  }
  if (null !== ssoLogOutButton) {
    ssoLogOutButton.setAttribute('href', urlLogout);
  }
};

const handleClickOnWpLoginJumpButton = () => {
  focusWpUserLoginField();
};

contentLoaded.then(() => {
  if (!isAadSsoWordPressPresent()) {
    console.error('Abandoning');
    removeSso();
    focusWpUserLoginField();
    return;
  }

  console.info('Proceeding');

  const wpLoginJumpButton = document.querySelector('.c-wp-login-jump__button');

  prependSsoToBody();
  copyAadSsoLinks();
  removeAadSsoLoginFormText();
  focusAadLoginButton();

  wpLoginJumpButton.addEventListener('click', handleClickOnWpLoginJumpButton);
});
