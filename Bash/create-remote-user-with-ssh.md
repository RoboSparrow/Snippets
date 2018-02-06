```bash
ssh root@<remote host>

sudo useradd -m <username>
sudo passwd <username>
sudo usermod -aG sudo <username>
sudo usermod --s /bin/bash <username>
```
home
```
# <username> box
ssh-copy-id <username>@<remote host>
```
