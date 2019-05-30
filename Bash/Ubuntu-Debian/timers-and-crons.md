
```bash
for user in $(cut -f1 -d: /etc/passwd); do crontab -u $user -l; done

systemctl list-timers

systemctl edit --full certbot.timer
```
 * https://wiki.archlinux.org/index.php/Systemd
 * https://wiki.archlinux.org/index.php/Systemd/Timers
