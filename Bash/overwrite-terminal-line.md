
```bash
printf "first\033[0K\r"
sleep 1

echo -ne "second\033[0K\r"
sleep 1

printf "third\033[0K\r\n"
```
