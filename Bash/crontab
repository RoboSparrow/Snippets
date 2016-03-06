## Administer

```
#list user's crontab
crontab -l
```
```
#edit user's crontab	
crontab -e	
```

## Cron task syntax

```
*/10 * * * * <command>
```

```
* * * * * command to be executed
- - - - -
| | | | |
| | | | ----- Day of week (0 - 7) (Sunday=0 or 7)
| | | ------- Month (1 - 12)
| | --------- Day of month (1 - 31)
| ----------- Hour (0 - 23)
------------- Minute (0 - 59)
```

### Worpress example:

 * disable WP cron  in config.php: `define('DISABLE_WP_CRON', true);
 
```
*/10 * * * * wget -q --spider <wordpress_url>o/wp-cron.php?doing_wp_cron
```

## Log

```
#cron syslog
grep CRON /var/log/syslog
```

## Sources:

 * http://kvz.io/blog/2007/07/29/schedule-tasks-on-linux-using-crontab/
 * https://vexxhost.com/resources/tutorials/how-to-use-cron-jobs-for-automation-on-ubuntu-14-04/
 * http://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/
 * https://tommcfarlin.com/wordpress-cron-jobs/
