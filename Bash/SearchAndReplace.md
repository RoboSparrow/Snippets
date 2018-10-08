Search

```
grep -nr '<string>' <folder>
```

Replace in file

```
sed -i -e 's/<old-string>/<new-string>/g' <file name>

```

---------

Bulk changes

case insensitive

1. rewiew affected lines (export to file)

```bash
grep -nri "<old-string>" . --exclude-dir={.git,_dev} >> /<path>/grep.txt
```

2. apply changes, ignore `.git` and `vendor` folder(s)

```bash
find . -type f  -not -path '*/\.git/*' -not -path '*/vendor/*' -print0 | xargs -0 sed -i 's/<old-string>/<new-string>/g'
```

3. recursively lint php files

```bash 
find . -type f -name '*.php'  -not -path '*/\.git/*' -not -path '*/vendor/*' -exec php -l {} \; | grep -v "No syntax errors detected"
```

4. list changed files

```bash
git status
```

5. review diff changes

```bash
git diff
```

6. run unit tests

```bash
./vendor/bin/phpunit
```
