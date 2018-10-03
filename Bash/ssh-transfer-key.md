```bash
ssh root@remote_host

sudo useradd -m username
sudo passwd username
sudo usermod -aG sudo username
sudo usermod --shell /bin/bash username

# home box
ssh-copy-id username@remote_host
```
