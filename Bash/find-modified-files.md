
Find modified o created in past two days, exclude git folders, sort Desc

```bash
find <path/to/dir> -type f -not -path '*/\.git/*' -mtime -2 -printf '%TY-%Tm-%Td %TT %p\n' | sort -r
```
