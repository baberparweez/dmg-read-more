<?php
if (defined('WP_CLI') && WP_CLI) {
	class Post_Search_Command
	{
		// ... (WP-CLI command code remains the same as provided earlier)
	}

	WP_CLI::add_command('post-search', 'Post_Search_Command');
}
