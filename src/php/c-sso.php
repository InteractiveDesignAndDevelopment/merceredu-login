<div class="c-sso">
  <div class="c-sso__inside">

    <?php
      if ('true' === $_GET['loggedout']) {
          include 'c-logged-out-follow-up.php';
      } ?>

    <div class="c-aad-login">

      <div class="c-aad-login__content">

        <h1 class="c-aad-login__heading">
          Log in to <em><?php echo get_bloginfo('name') ?></em>
        </h1>

        <p class="c-aad-login__description c-aad-login__description--log-in">
          Use your Mercer Office 365 account to log in to WordPress:
        </p>

        <a class="c-aad-login__button c-aad-login__button--log-in" href="#">
          Office 365 SSO Log In
        </a>

        <p class="c-aad-login__description c-aad-login__description--log-out">
          Log out everywhere you are using your Mercer Office 365 account:
        </p>

        <a class="c-aad-login__button c-aad-login__button--log-out" href="#">
          Office 365 SSO Log Out
        </a>

      </div>

    </div>

    <div class="c-wp-login-jump c-wp-login-jump--between-aad-and-wp-login">

      <div class="c-wp-login-jump__content">

        <a class="c-wp-login-jump__button" href="#login">

          <span class="i-icon i-icon--circle-chevron-down">
            <span class="i-icon__part"></span>
            <span class="i-icon__part"></span>
            <span class="i-icon__part"></span>
          </span>

        </a>

        <div class="c-wp-login-jump__text">
          Scroll down for standard form
        </div>

      </div>

    </div>

    <div class="c-angle-divider c-angle-divider--between-aad-and-wp-login">
      <div class="c-angle-divider__part"></div>
      <div class="c-angle-divider__part"></div>
      <div class="c-angle-divider__part"></div>
      <div class="c-angle-divider__part"></div>
      <div class="c-angle-divider__part"></div>
    </div>

  </div>
</div>
