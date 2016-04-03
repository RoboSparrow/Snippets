Find all files and list

```
find . -name '*' -exec file {} \; | ls
```

Find images in folder and output list to file

```
# -regex/ -iregex & output to flie
find </path/to> -iregex ".*\.\(jpg\|gif\|png\|jpeg|bmp\)" > images.log

# or
find ./ -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.gif -o -iname \*.jpeg -o -iname \*.bmp \)
```
