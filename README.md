# Embertrail

An original 32-course platforming adventure built with BlueEngine. Guide Mote, a lantern spirit, through eight worlds to recover the dawn.

[Download Embertrail for Windows x64](https://github.com/kevstermcgee/Embertrail/releases/latest/download/embertrail-setup-windows-x64.exe)

Run the installer EXE to install the native game, original music and Start Menu shortcut. A desktop shortcut is optional. No browser or WASM runtime is used. Progress and settings remain in `%LOCALAPPDATA%\BlueEngine` through upgrades and uninstall.

Move with arrows or WASD, jump with Space or Up, and run with Shift. Hold Up for higher jumps. Esc pauses; K/L save and load. Standard controllers are supported.

[Game source and development guide](https://github.com/kevstermcgee/BlueEngine/tree/game/embertrail/games/embertrail). All characters, artwork, music and levels are original.

The Windows workflow retrieves pinned public source, runs rule tests and code checks, validates the score, checks executable resources and shortcut/window icons, launches the native game, captures an isolated declared-file package, and tests installation, upgrade and save-preserving uninstall. The browser deployment has been retired. Releases contain only the verified Windows installer and its SHA256 checksum.
