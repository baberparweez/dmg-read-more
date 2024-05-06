# DMG Read More WordPress Plugin

WordPress Gutenberg block plugin with two different features:

1. Search for and then choose a published post to insert into the editor as a stylised anchor link

   - Search for 'DMG Read More' in the Gutenberg editor and add it to the required area.

2. WP-CLI command to execute a WP_Query search for Posts within a date range

   - Make sure the CMD is running WP-CLI.
   - To use the command, cd into the root directory of the site and run: `wp dmg-read-more search [--date-before=2023-08-26] [--date-after=2023-08-24]`
