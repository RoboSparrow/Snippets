print var

```
OBJ = "my value"
$(info $$OBJ is [${OBJ}])
```

multiple make files

```
os1:
    make -f makefile.1

os2:
    make -f makefile.2
```
