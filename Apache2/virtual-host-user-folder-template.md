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
    ServerName <DOMAINNAME>
    Redirect / http://www.<DOMAINNAME>
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin <EMAIL>
    ServerName www.<DOMAINNAME>

    DocumentRoot /home/<USER>/www/<SITE>

    <Directory />
        Options FollowSymLinks
        Options All
        AllowOverride All
        Require all granted
    </Directory>
    
    <Directory /home/<USER>/www/<SITE>>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>

    #####
    # logging
    #####
    
    ErrorLog /home/<USER>/www/logs/error.log
    # Possible values include: debug, info, notice, warn, error, crit, alert, emerg.
    LogLevel warn

    CustomLog /home/<USER>/www/logs/access.log combined

    #####
    # optional php configs
    #####
    
    # DirectoryIndex index.php index.html index.htm
    # AcceptPathInfo On
    # php_flag file_uploads On
    # php_value post_max_size 8M
    # php_value upload_max_filesize 8M
    # php_value max_input_vars 4000
    # php_value max_input_vars 5000
    
</VirtualHost>
```
