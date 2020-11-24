<?php
/*
Plugin Name: Test block
description: test block
Version: 1.0.0
License: none
*/

function test_block_register_blocks()
{
    // automatically load dependencies and version
    $path = plugin_dir_path( __FILE__ );
    $asset_file = include( $path . '/dist/bundle.asset.php');

    wp_register_script(
        'test-block',
        plugins_url( 'dist/bundle.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    register_block_type( 'test-block/test-block', array(
        'editor_script' => 'test-block',
        'script' => 'test-block',
        'render_callback' => 'test_block_render_callback',
    ) );
}

function test_block_render_callback(){
    return '<div id="test-block-root"></div>';
}

add_action( 'init', 'test_block_register_blocks' );