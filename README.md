# DMG Read More WordPress Plugin

WordPress Gutenberg block plugin with two different features:

1. Search for and then choose a published post to insert into the editor as a stylised anchor link

   - Search for 'DMG Read More' in the Gutenberg editor and add it to the required area.

2. WP-CLI command to execute a WP_Query search for Posts (within a date range) that contain this Gutenberg block

   - Make sure the CMD is running WP-CLI.
   - To use the command, cd into the root directory of the site and run the following command variations:
     - Posts published within the last 30 days: `wp dmg-read-more search`
     - Posts published before a specific date: `wp dmg-read-more search --date-before=2024-04-09`
     - Posts published after a specific date: `wp dmg-read-more search --date-after=2024-04-05`
     - Posts published between specific dates: `wp dmg-read-more search --date-before=2024-04-09 --date-after=2023-08-24`

### NOTE

There may be issues running the WP-CLI commands due to Local environment variables not being enabled by default. This is usually a Local by Flywheel issue. [This](https://community.localwp.com/t/local-5-x-how-to-check-site-remote-host-and-port/17085/18) forum explains how to run WP-CLI commands within Local by Flywheel.
