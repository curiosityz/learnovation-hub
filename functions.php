<?php
function learnovation_hub_enqueue_styles() {
    wp_enqueue_style('learnovation-hub-style', get_stylesheet_uri());
    wp_enqueue_style('learnovation-hub-custom', get_template_directory_uri() . '/custom.css');
}

function learnovation_hub_enqueue_scripts() {
    wp_enqueue_script('learnovation-hub-script', get_template_directory_uri() . '/custom.js', array(), null, true);
}

function learnovation_hub_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'learnovation-hub'),
    ));
}

add_action('wp_enqueue_scripts', 'learnovation_hub_enqueue_styles');
add_action('wp_enqueue_scripts', 'learnovation_hub_enqueue_scripts');
add_action('after_setup_theme', 'learnovation_hub_theme_setup');
?>
