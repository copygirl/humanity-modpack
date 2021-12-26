# Humanity Modpack

This is a small-ish Minecraft [Fabric] modpack with no particular focus for a group of friends to play on a server.

- Check the [mod list](MODS.md) for a list of mods in this pack.
- Have a look at the [changelog](CHANGELOG.md) to see what's been updated.

## Download / Installation

We use [packwiz] to create an **auto-updating** [MultiMC] modpack. Installation is simple:

- In MultiMC, click "*Add Instance*", then "*Import from zip*".
- Go to the [Releases] page and right click the latest .zip release file and click "*Copy Link*".
- Paste the link into the box titled "*Local file or link to a direct download*".
- Feel free to adjust the name or group the instance will end up in.  
  Though note that the pack comes with its own icon automatically.
- Press *OK* to create the instance, then launch it.
- Select any optional mods you'd like to play with.
- Check the [mod list](MODS.md) for any mods you don't know about.
- Have fun!

Please note that your instance will automatically update when new versions are released. If you would like to avoid this, you can go to the instances "*Settings*", then "*Custom commands*", and disable the check box.

## Updating Minecraft

Unfortunately, due to the limitations of packwiz, Minecraft versions can not be updated automatically when the modpack moves to a new one. When this occurs you'll have to do this manually. But thankfully, it's straight-forward:

- Go into the instance settings, to the "*Version*" section.
- For "*Minecraft*" and "*Intermediary Mappings*", press "*Change Version*" and select the right version.
- Optionally update the "*Fabric Loader*" too. They usually work for multiple MC versions.

Alternatively, you can follow the installation steps again and set up a new instance. To keep your settings, copy over `options.txt`, `servers.dat`, the Xaero's folders (if you use the (mini)map mods), etc.. from the old instance.

## Server Setup

```sh
# Download the packwiz bootstrapper and Fabric server launcher.
curl -OJ https://github.com/comp500/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar
curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.18.1/0.12.12/0.10.2/server/jar

# Download modpack files. Also run this to update.
java -jar packwiz-installer-bootstrap.jar -g -s server https://raw.githubusercontent.com/copygirl/humanity-modpack/1.18/pack.toml

# Start up the server with 4GB RAM. Or use your usual server launch script.
java -Xms4G -Xmx4G -jar fabric-server-mc.1.18.1-loader.0.12.12-launcher.0.10.2.jar nogui
# Do the usual: Accept the EULA, modify the server.properties, ...
```


[Fabric]:   https://fabricmc.net/
[MultiMC]:  https://multimc.org/
[packwiz]:  https://github.com/comp500/packwiz
[Releases]: https://github.com/copygirl/humanity-modpack/releases
