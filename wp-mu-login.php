<?php

/*
Plugin Name: Wp Mu Login
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: SAYRE_TS
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

function wp_mu_login_customizations() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo plugins_url('logo.svg', __FILE__); ?>);
        }
    </style>
    <link href="<?php echo plugins_url( 'wp-mu-login.css', __FILE__ ) ?>" rel="stylesheet">
<?php }

add_action( 'login_enqueue_scripts', 'wp_mu_login_customizations' );
