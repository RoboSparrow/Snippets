
- partition must be unmounted before you recover. In most cases, you will have to shut down your computer and boot using an Ubuntu LiveCD/LiveUSB to be able to this

```
sudo apt-get install extundelete

lsblk
sudo extundelete --restore-directory /home/joerg/Documents/ /dev/sda
```
