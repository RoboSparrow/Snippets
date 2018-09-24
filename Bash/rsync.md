Recursive copy

```bash
rsync -avh <source-dir>/ <deat-dir> # mind the / !!
```

create `rsync` enabled tarball 

```bash 
GZIP='--rsyncable' tar cvzf file.tar.gz /my/dir
```
use tar `-h` option for following symlinks

remote ssh

* https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh

```bash
rsync -avz -e ssh fromdir user@host:/todir
```

```bash
rsync -azP ~/dir1 <username>@<remote_host>:<destination_directory>

# - a: archive mode (permissions, symlinks recursive ets
# - z: reduce the network transfer by adding compression
# - P:  gives you a progress bar for the transfers and the second allows you to resume interrupted transfers:
```
