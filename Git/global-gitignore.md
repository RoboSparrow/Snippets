1. Set global gitignore and edit

```
git config --global core.excludesfile ~/.gitignore
echo '<myfile>' >> ~/.gitignore
```
2. Untrack already added files

```
cd <project>
git rm --cached <myfile>
```

