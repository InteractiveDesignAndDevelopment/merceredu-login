<?php

/*
Plugin Name: WP mercer.edu Login
Plugin URI: https://github.com/merceruniversity/wp-mu-login
Description: A brief description of the Plugin.
Version: 1.0
Author: Todd Sayre
Author URI: https://github.com/Sporkyy
License: MIT
*/

function wp_mu_login_include_style_sheet() { ?>
    <link href="<?php echo plugins_url( 'wp-mu-login.css', __FILE__ ) ?>" rel="stylesheet">
<?php }

function wp_mu_login_azure_ad_trigger() { ?>
    <div class="employee-login">
        <div>
            Log-in to <?php echo bloginfo('name') ?>
        </div>
        <div>
            Are you a Mercer Employee?
        </div>
        <div>
            <p>
                Click yes to automagically log in via SSO.
            </p>
            <p>
                Click no to be directed to site log in via Username & Password
            </p>
        </div>
        <div>
            <a href="#">Yes!</a>
            <a href="#">No</a>
        </div>
        <div>
            <?php echo admin_url() ?>
        </div>
    </div>
<?php }

// Actions
add_action( 'login_enqueue_scripts', 'wp_mu_login_include_style_sheet');

// Filters
add_filter( 'login_message', 'wp_mu_login_azure_ad_trigger' );

?>