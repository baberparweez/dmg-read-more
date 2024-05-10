<?php

/**
 * Register the WP-CLI command for the DMG Read More plugin.
 *
 * @package DMG_Read_More
 */

if (defined('WP_CLI') && WP_CLI) {
	WP_CLI::debug('WP-CLI is loaded.', 'debug');

	// Define the path to the WordPress directory
	$wordpress_path = ABSPATH;

	// Include the WordPress bootstrap file
	if (file_exists($wordpress_path . 'wp-load.php')) {
		require_once $wordpress_path . 'wp-load.php';
	} else {
		WP_CLI::error('Failed to load WordPress environment');
	}

	// Include the file containing the DMG_Read_More_Command class
	require_once __DIR__ . '/dmg-read-more.php';

	// Register the 'dmg-read-more' command with WP-CLI
	WP_CLI::add_command('dmg-read-more', 'DMG_Read_More_Command');
}
