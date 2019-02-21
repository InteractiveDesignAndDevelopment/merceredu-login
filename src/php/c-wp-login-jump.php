<?php
  $extraComponentClasses = '';
  if ($modifier) {
      $extraComponentClasses = "c-wp-login-jump--{$modifier}";
  }
?>

<div class="c-wp-login-jump  <?php echo $extraComponentClasses ?>">

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
