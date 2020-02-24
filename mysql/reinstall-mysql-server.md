```bash
sudo apt-get remove --purge mysql-server mysql-client mysql-common
sudo apt-get remove --purge mysql-client-core-5.7
sudo apt-get autoremove
sudo apt-get autoclean
sudo rm -rf /var/lib/mysql
```

```bash
sudo apt-get install mysql-server
sudo apt-get install mysql-client
sudo apt-get install mysql-workbench
sudo mysql_secure_installation 
```
