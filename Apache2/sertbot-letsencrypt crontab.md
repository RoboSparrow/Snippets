``` bash
## centos
1 0 * * * /opt/certbot/certbot-auto renew --quiet --no-self-upgrade > >/dev/null && service httpd reload
## debian
1 0 * * * /opt/certbot/certbot-auto renew --quiet --no-self-upgrade > >/dev/null && service apache2 reload
```
