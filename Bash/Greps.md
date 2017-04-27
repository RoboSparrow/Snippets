Search files containing pattern

 * http://stackoverflow.com/questions/16956810/how-to-find-all-files-containing-specific-text-on-linux

```bash
grep -rnw '/<path>/' -e '<pattern>'
# -r or -R is recursive,
# -n is line number, and
# -w stands for match the whole word.
# -l (lower-case L) can be added to just give the file name of matching files.

# Search only files with .c or .h extensions:
grep --include=\*.{c,h} -rnw '/path/to/somewhere/' -e "pattern"
# Exclude all files with .o extension:
grep --exclude=*.o -rnw '/path/to/somewhere/' -e "pattern"
# Exclude/include directories through --exclude-dir and --include-dir parameter
grep --exclude-dir={dir1,dir2,*.dst} -rnw '/path/to/somewhere/' -e "pattern"
```

```bash
grep -Ril "text-to-find-here" /
# -i stands for ignore case (optional in your case).
# -R stands for recursive.
# -l stands for "show the file name, not the result itself".
```
