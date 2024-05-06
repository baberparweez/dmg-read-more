<?php
if (defined('WP_CLI') && WP_CLI) {
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
		 *     wp dmg-read-more search --date-before=2023-05-31 --date-after=2023-05-01
		 */
		public function search($args, $assoc_args)
		{
			$defaults = [
				'date_query' => [
					[
						'after' => date('Y-m-d', strtotime('-30 days')),
						'before' => date('Y-m-d'),
						'inclusive' => true,
					],
				],
			];

			if (isset($assoc_args['date-before'])) {
				$defaults['date_query'][0]['before'] = $assoc_args['date-before'];
			}

			if (isset($assoc_args['date-after'])) {
				$defaults['date_query'][0]['after'] = $assoc_args['date-after'];
			}

			$query = new WP_Query([
				'post_type' => 'post',
				'post_status' => 'publish',
				's' => '<!-- wp:create-block/dmg-read-more',
				'date_query' => $defaults['date_query'],
				'posts_per_page' => -1,
			]);

			if ($query->have_posts()) {
				while ($query->have_posts()) {
					$query->the_post();
					WP_CLI::log(get_the_ID());
				}
				wp_reset_postdata();
			} else {
				WP_CLI::error('No posts found containing the Gutenberg block within the specified date range.');
			}
		}
	}

	WP_CLI::add_command('dmg-read-more', 'DMG_Read_More_Command');
}
