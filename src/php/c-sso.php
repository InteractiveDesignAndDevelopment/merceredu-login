<div class="c-sso">
  <div class="c-sso__inside">

    <?php
      if ('true' === $_GET['loggedout']) {
          include 'c-logged-out-follow-up.php';
          $modifier = 'between-logged-out-and-aad';
          include 'c-wp-login-jump.php';
          include 'c-triangle-divider.php';
      }

      include 'c-aad-login.php';
      $modifier = 'between-aad-and-wp-login';
      include 'c-wp-login-jump.php';
      include 'c-chevron-divider.php';

    ?>
  </div>
</div>
