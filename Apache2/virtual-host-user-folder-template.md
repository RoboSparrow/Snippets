No extra apache  mod required

```
sudo useradd -M <USER>
sudo passwd <USER>
sudo usermod -a -G www-data <USER>
sudo mkdir -p /home/<USER>/www
sudo mkdir -p /home/<USER>/logs
sudo chown -R <USER>:<USER> /home/<USER>
```
conf template

```
<VirtualHost *:80>
    ServerAdmin <EMAIL>
    ServerName <URI>

    DocumentRoot /home/<USER>/www/<SITE>

    <Directory />
            Options FollowSymLinks
            AllowOverride None
    </Directory>
    <Directory /home/<USER>/www/<SITE>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
    </Directory>

    ErrorLog /home/<USER>/www/logs/error.log

    # Possible values include: debug, info, notice, warn, error, crit,
    # alert, emerg.
    LogLevel warn

    CustomLog /home/<USER>/www/logs/access.log combined
    <Directory />
        Options All
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
