```
stat -c '%A %a %U:%G %n  (%s Bytes, %F)' *
```
%A     Access rights in human readable form
%a     Access rights in octal
%U     User name of owner
%G     Group name of owner
%n     File name
%s     Total size, in bytes
%F     File type

```
stat -c "%a %n" *
```
 %a     Access rights in octal
 %n     File name
