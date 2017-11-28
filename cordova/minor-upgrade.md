**Minor cordova upgrades***

```bash
sudo npm install -g cordova@6
cordova platform remove android
cordova platform add android@6
```

Gradle install/upgrade

SDKMAN! is a tool for managing parallel versions of multiple Software Development Kits on most Unix-based systems.
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh" #or open new terminal

sdk install gradle 4.3.1
```
