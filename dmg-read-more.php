<?php

/**
 * Plugin Name:       DMG Read More
 * Description:       A WordPress plugin to show a readme link for chosen post.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Baber Parweez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dmg-read-more
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_post_search_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_post_search_block_init');

require_once 'dmg-read-more-cli.php';
