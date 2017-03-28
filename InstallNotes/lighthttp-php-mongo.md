# ligthy on (l|k|x)Ubuntu with PHP (5.6) and Mongo

```
sudo apt-get install lighttpd
```

* root:  "/var/www/html" 
* config:  "/etc/lighttpd/lighttpd.conf". 

## mod userdir

```
sudo lighttpd-enable-mod userdir
```

## PHP

```
sudo add-apt-repository ppa:ondrej/php && sudo apt-get update
sudo apt-get install lighttpd php5.6-cgi

sudo lighty-enable-mod fastcgi
sudo lighty-enable-mod fastcgi-php

sudo service lighttpd force-reload
```

## vhost

```
sudo nano /etc/lighttpd/lighttpd.conf

## jb:
$HTTP["host"] =~ "^devel\.bo$" {
server.document-root = "/home/lubuntu/projects"
}

sudo chmod o+x /home/lubuntu && sudo chmod o+x /home/lubuntu/projects && sudo chmod -R o+r /home/lubuntu/projects

sudo service lighttpd force-reload
```

```
sudo nano /etc/hosts

## jb:
127.0.0.1	devel.bo www.devel.bo
```

* follow install instructions on https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition

```
sudo apt-get install php5.6-mongo
sudo apt-get install php5.6-mongodb

sudo nano /etc/php/5.6/cgi/php.ini

;;Jb
extension=mongo.so
extension=mongodb.so

sudo service lighttpd force-reload
```

# Misc

```
sudo service lighttpd reload
sudo service lighttpd restart
sudo service lighttpd start
sudo service lighttpd stop
```

