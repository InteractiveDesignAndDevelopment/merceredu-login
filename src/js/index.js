/**
 * @author Todd Sayre
 */

document.addEventListener('DOMContentLoaded', function() {
    let aLogin = document.querySelector('.aadsso-login-form-text a[href*="authorize"]');
    let aLogout = document.querySelector('.aadsso-login-form-text a[href*="logout"]');
    let urlLogin = aLogin.getAttribute('href');
    let urlLogout = aLogout.getAttribute('href');
    let aMULogin = document.querySelector('.aad__cta--login');
    let aMULogout = document.querySelector('.aad__cta--logout');
    aMULogin.setAttribute('href', urlLogin);
    aMULogout.setAttribute('href', urlLogout);
});
