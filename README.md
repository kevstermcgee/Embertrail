# Embertrail

A little light. A very big adventure. Embertrail 0.2.3 is an original, controller-first platforming adventure built with BlueEngine.

[Download Embertrail 0.2.3 for Windows x64](https://github.com/kevstermcgee/Embertrail/releases/download/v0.2.3/embertrail-setup-windows-x64.exe) · [All releases](https://github.com/kevstermcgee/Embertrail/releases) · [BlueEngineGames](https://kevstermcgee.github.io/BlueEngineGames/)

The game opens fullscreen with a brief **BlueEngine Games** studio card before its own title menu. Press a key, click, or use a controller button to skip; release the control before playing. F or F11 switches fullscreen, and `--windowed` starts a windowed session. Saves and game rules are preserved.

Vesper, the Bell Regent, stole the Dawnheart that warms Mote's village. Cross 32 authored courses in eight worlds, free their bound guardians, ring eight dawn bells, and bring the Dawnheart home. Characters greet Mote automatically, without dialogue choices.

Moving platforms carry Mote against stationary terrain, stairs animate travel with a warm camera fade, and five guardian/Vesper compositions provide subtle rhythmic intensity. Battle music begins when the boss appears, stays through the encounter and returns to the world theme after defeat. Explore 32 regional underground routes with responsive movement, readable panels, 34 interaction recordings and sixteen named compositions.

| Controller | Keyboard | Action |
| --- | --- | --- |
| Left stick / D-pad | A/D or Left/Right | Move |
| A / bottom face button | Space | Jump |
| X / left face button | X | Cast with the Ember Lantern |
| RT / right bumper | Shift | Run |
| Down | S / Down | Duck, brake, enter or leave a root grotto |
| Menu / Start | Esc | Pause or open title options |
| Y / View | Tab | Trail atlas |
| Stick / D-pad, A, B | Arrows, Enter, Esc | Navigate, confirm, go back |

The pause menu includes checkpoint and course restarts, music and sound controls, the trail atlas, an optional Controls page, return to title, and Quit game. The game has no permanent controls strip. Choose **Download this song** to save the named track currently playing as an exact WAV in **Downloads / Embertrail Soundtrack**. Title options also offer its song download. Progress saves automatically.

Run the installer to install the native game, soundtrack, and Start Menu shortcut; a desktop shortcut is optional. Saves and settings stay in `%LOCALAPPDATA%\BlueEngine` through upgrades and uninstall. Version 4 retains version 3 course and campaign progress, repairs positions affected by the old moving-platform overlap and resumes stair travel exactly. Earlier campaign discoveries migrate through the same engine-owned save contract.

[Exact game source and development guide](https://github.com/kevstermcgee/BlueEngine/tree/8ab26c4b39cd9818e6001ae10b5f116a0f36d28d/games/embertrail).

The [verified Windows build](https://github.com/kevstermcgee/BlueEngine/actions/runs/39100795335) passed rule and snapshot tests, code checks, score validation, executable resources, shortcut and icon checks, isolated graphical launch, and installation, upgrade, and save-preserving uninstall. It also captured the real studio card and verified fullscreen, its first toggle to a window and back, and the explicit windowed override using isolated player data. `native-release-proof.json` records the exact source, installer checksum, and all runtime file hashes. Distribution uses the native Windows installer EXE.
