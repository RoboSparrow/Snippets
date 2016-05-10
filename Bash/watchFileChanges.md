
 `-f`: follow *file* watches changes for programs who append entries to an existing file (Logs)

```
tail -f -n <line numbers> <file>

# -f defines the interval between re-vists in seconds (default: 1s)
tail -f -s 0.5 -n <line numbers> <file>
```

 `-F`: follow *file name*, catches changes also if wile was re-cereated by a program (gedit)

```
tail -F -n <line numbers> <file>
```

Example ubuntu/apache standard http error log log

```
# -F ensures that the stream is not lost should the log file rotate
sudo tail -f /var/log/apache2/error._log
```
