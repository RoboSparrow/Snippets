Convert all svg in foilder to png

```
for i in *.svg; do convert "$i" "${i%.svg}.png"; done
```
