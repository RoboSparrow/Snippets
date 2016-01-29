https://codex.wordpress.org/Changing_The_Site_URL

```
update_option( 'siteurl', 'http://example.com' );
update_option( 'home', 'http://example.com' );
```

or

```
UPDATE wp_options SET option_value = replace(option_value, 'http://oldsite.com', 'http://example.com');

UPDATE wp_posts SET guid = replace(guid, 'http://oldsite.com', 'http://example.com');

UPDATE wp_posts SET post_content = replace(post_content, 'http://oldsite.com', 'http://example.com');

UPDATE wp_postmeta SET meta_value = replace(meta_value, 'http://oldsite.com', 'http://example.com');
```
