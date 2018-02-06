* https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04

```
sudo apt-get install postgresql postgresql-contrib
```

list dbs

```
sudo -i -u postgres
psql

#list all databases
postgres=# \l

#exit console
postgres=# \q

```
dump

```
# everything
sudo su - postgres
pg_dumpall > postrges_backup.back
# /var/lib/psotgresql/postrges_backup.back
```

```
# single database
sudo su - postgres
psql -f ./postrges_backup.back postgres
```

single db:

```
sudo -i -u postgres
# pg_dump dbname > outfile
pg_dump my_database > ~/my_database.psql
```

import

```
sudo -i -u postgres
# psql dbname < infile
psql my_database < ./my_database.psql
```

