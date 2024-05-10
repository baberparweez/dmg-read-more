<?php
// Check if WP_CLI is defined and available
if (defined('WP_CLI') && WP_CLI) {
	// Define the DMG_Read_More_Command class
	class DMG_Read_More_Command
	{
		/**
		 * Search for posts containing the Gutenberg block within a date range.
		 *
		 * ## OPTIONS
		 *
		 * [--date-before=<date>]
		 * : Posts published before this date (YYYY-MM-DD).
		 *
		 * [--date-after=<date>]
		 * : Posts published after this date (YYYY-MM-DD).
		 *
		 * ## EXAMPLES
		 *
		 * wp dmg-read-more search
		 * wp dmg-read-more search --date-before=2024-04-09
		 * wp dmg-read-more search --date-after=2024-04-05
		 * wp dmg-read-more search --date-before=2024-04-09 --date-after=2023-08-24
		 */
		public function search($args, $assoc_args)
		{
			// Set up the WP_Query arguments
			$query_args = [
				'post_type'      => 'post',          // Search only for posts
				'post_status'    => 'publish',       // Search only for published posts
				'posts_per_page' => -1,              // Retrieve all matching posts
				'date_query'     => [],              // Initialize an empty date_query array
			];

			// Check if the --date-before option is provided
			if (isset($assoc_args['date-before'])) {
				// Add a 'before' condition to the date_query
				$query_args['date_query'][] = [
					'before'    => $assoc_args['date-before'],
					'inclusive' => true,
				];
			} else {
				// If --date-before is not provided, default to posts within the last 30 days
				$query_args['date_query'][] = [
					'after'     => date('Y-m-d', strtotime('-30 days')),
					'inclusive' => true,
				];
			}

			// Check if the --date-after option is provided
			if (isset($assoc_args['date-after'])) {
				// Add an 'after' condition to the date_query
				$query_args['date_query'][] = [
					'after'     => $assoc_args['date-after'],
					'inclusive' => true,
				];
			}

			// Execute the WP_Query with the prepared arguments
			$query = new WP_Query($query_args);
			$post_ids = [];

			// Check if the query has any posts
			if ($query->have_posts()) {
				// Loop through each post
				while ($query->have_posts()) {
					$query->the_post();
					$post_content = get_the_content();

					// Check if the post content contains the Gutenberg block comment
					if (strpos($post_content, '<!-- wp:create-block/dmg-read-more') !== false) {
						// If the block is found, add the post ID to the $post_ids array
						$post_ids[] = get_the_ID();
					}
				}
				// Reset the global post data after the loop
				wp_reset_postdata();
			}

			// Check if any post IDs were found
			if (!empty($post_ids)) {
				// Loop through each post ID and log it using WP_CLI::log()
				foreach ($post_ids as $post_id) {
					WP_CLI::log($post_id);
				}
			} else {
				// If no posts were found, display an error message using WP_CLI::error()
				WP_CLI::error('No posts found containing the Gutenberg block within the specified date range.');
			}
		}
	}

	// Register the 'dmg-read-more' command with WP-CLI
	WP_CLI::add_command('dmg-read-more', 'DMG_Read_More_Command');
}
