* https://www.digitalocean.com/community/tutorials/how-to-manage-logfiles-with-logrotate-on-ubuntu-16-04
* https://manpages.debian.org/jessie/logrotate/logrotate.8.en.html

# Logrotate:

create log dir and apply permissions

```
sudo mkdir /home/<user>/<project>/log
sudo chown -R <user>:<user> /home/<user>/<project>/log
sudo chmod 770 /home/<user>/<project>/log
sudo chmod g+s /home/<user>/<project>/log
```

create log rotate conf

```
sudo nano /etc/logrotate.d/<project>
```

add

```
/home/<project>/log/*.log {
  rotate 12
  daily
  compress
  missingok
  notifempty
  create 0770 <user> <user>
}

```

Update logrotate & Check if your entry is loaded

```
sudo logrotate /etc/logrotate.conf --debug
```
