```bash
# create local .pylintrc with defaults
pylint --generate-rcfile > ./.pylintrc
```

```
# find unused imports in current dir
pylint *.py | grep "unused-import"
```
