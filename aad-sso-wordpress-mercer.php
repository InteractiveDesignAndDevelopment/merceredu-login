<?php

/*
Plugin Name: AADSSO Mercer Customizations
Plugin URI: https://github.com/merceruniversity/aad-sso-wordpress-mercer
Description: Customizes the standard WordPress login form for AAD SSO.
Version: 2.0
Author: Mercer University
Author URI: https://github.com/merceruniversity
License: MIT
*/

class AADSSOMercer
{
    public static $instance = false;

    public function __construct()
    {
        // Actions
        add_action('login_enqueue_scripts', [$this, 'add_javascript']);

        /*
         * `login_head` is used instead of `login_enqueue_scripts` for the style sheet so it will be below
         * the default stylesheet that has a `.login *` selector and, btw, `.login` targets the body tag
         */
        add_action('login_head', [$this, 'add_style_sheet']);

        // Filters
        add_filter('login_message', [$this, 'print_aad']);

        if ($_SERVER['PHP_SELF'] == '/wp-login.php') {
            ob_start([$this, 'kill_wp_attempt_focus']);
        }
    }

    public static function kill_wp_attempt_focus($in)
    {
        $pattern = '/\s*(wp_attempt_focus\(\);)\s*/';
        $replacement = ' /* $1 */ ';

        return preg_replace($pattern, $replacement, $in);
    }

    public static function add_style_sheet()
    {
        $html = '<link href="%s" rel="stylesheet">';
        $url = plugins_url('/build/plugin.css', __FILE__);
        printf($html, $url);
    }

    public static function add_javascript()
    {
        $html = '<script src="%s"></script>';
        $url = plugins_url('/build/plugin.js', __FILE__);
        printf($html, $url);
    }

    public static function print_aad()
    {
        $html = '';
        $showAadLogoutMessage = 'true' == $_GET['loggedout'];

        include 'src/php/c-sso.php';
    }

    /**
     * Gets the (only) instance of the plugin. Initializes an instance if it hasn't yet.
     *
     * @return \AADSSOMercer The (only) instance of the class.
     */
    public function get_instance()
    {
        if (!self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

$aadsso = AADSSOMercer::get_instance();
