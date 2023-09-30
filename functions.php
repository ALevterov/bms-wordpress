<?php
add_action( 'wp_enqueue_scripts', 'add_scripts_and_styles');
add_filter( 'show_admin_bar', '__return_false' );
add_action('get_header', 'my_filter_head');

function my_filter_head() {
   remove_action('wp_head', '_admin_bar_bump_cb');
} 
function add_scripts_and_styles() {
    wp_deregister_script('jquery');

    wp_enqueue_script( 'main', get_template_directory_uri() .  '/js/main.js', null, null, true ); 

		wp_enqueue_style( 'main', get_template_directory_uri() . '/styles/main.css', false );

		show_admin_bar( false );
}

?>