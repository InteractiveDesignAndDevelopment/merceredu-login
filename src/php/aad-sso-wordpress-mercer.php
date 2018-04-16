<?php

/*
Plugin Name: AADSSO Mercer Customizations
Plugin URI: https://github.com/merceruniversity/wp-mu-login
Description: A brief description of the Plugin.
Version: 1.0
Author: Todd Sayre
Author URI: https://github.com/Sporkyy
License: MIT
*/

class AADSSOMercer
{

    static $instance = false;

    public function __construct()
    {
        // Actions
        add_action('login_enqueue_scripts', array($this, 'add_style_sheet'));
        add_action('login_enqueue_scripts', array($this, 'add_javascript'));

        // Filters
        add_filter('login_message', array($this, 'print_aad'));
        add_filter('login_footer', array($this, 'print_help'));

        if ($_SERVER['PHP_SELF'] == '/wp-login.php') {
            ob_start(array($this, 'kill_wp_attempt_focus'));
        }
    }

    public static function kill_wp_attempt_focus($in)
    {
        $pattern     = '/\s*(wp_attempt_focus\(\);)\s*/';
        $replacement = ' /* $1 */ ';

        return preg_replace($pattern, $replacement, $in);
    }

    public static function add_style_sheet()
    {
        $html = '<link href="%s" rel="stylesheet">';
        printf($html, plugins_url('aad-sso-wordpress-mercer.css', __FILE__));
    }

    public static function add_javascript ()
    {
        $html = '<script src="%s"></script>';
        printf($html, plugins_url('aad-sso-wordpress-mercer.js', __FILE__));
    }

    public static function print_help()
    {

        $html = '<div class="help">';
        $html .= '<h2 class="help__heading">I don\'t have a Mercer account.</h2>';
        $html .= '</div>';

        echo $html;
    }

    public static function print_aad()
    {
        $html = '<div class="aad">';

        $html .= '<h1 class="aad__heading">Log-in to %s</h1>';

        $html .= '<div class="aad__interrogatory">';
        $html .= 'Do you have a <span class="aad__mercer">Mercer</span> account?';
        $html .= '<div>';  // .aad__interrogatory


        $html .= '<div class="aad_intro">';
        $html .= 'If so use the buttons below to log in and out via <abbr title="Microsoft Azure Active Directory">SSO</abbr>.';
        $html .= '</div>';

        $html .= '<div class="aad__actions">';
        $html .= '<a class="aad__cta aad__cta--login" href="#">SSO Login</a>';
        $html .= '<a class="aad__cta aad__cta--logout" href="#">SSO Logout</a>';
        $html .= '</div>';  // .aad__actions

        $html .= '<div class="aad__scroll-invite">';
        $html .= 'Scroll down to access %s via standard Log-in Form';
        $html .= '</div>';  // .aad__scroll-invite

        $html .= '</div>';  // .aad

        $html .= '<div id="no-aad"></div>';

        printf($html,
            get_bloginfo('name'),
            get_bloginfo('name'));
    }

    /**
     * Gets the (only) instance of the plugin. Initializes an instance if it hasn't yet.
     *
     * @return \AADSSOMercer The (only) instance of the class.
     */
    public function get_instance()
    {
        if ( ! self::$instance) {
            self::$instance = new self();
        }

        return self::$instance;
    }

}

$aadsso = AADSSOMercer::get_instance();

