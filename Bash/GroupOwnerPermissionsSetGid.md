Change group ownwership recusively.
Allow group r/w access.
New files and sub-folders will inherit ownweship and permissions.

```
sudo chgrp -R <group> <folder>
sudo chmod -R g+rwx <folder>
sudo chmod -R g+s <folder> #setgid
```

`setgid` :

* When the setgid bit is set on a directory, new sub folders and files within that directory will inherit the group of the owner of the directory

* http://linuxg.net/how-to-set-the-setuid-and-setgid-bit-for-files-in-linux-and-unix/
