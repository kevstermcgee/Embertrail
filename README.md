# Embertrail

A little light. A very big adventure. Embertrail 0.2.1 is an original, controller-first platforming adventure built with BlueEngine.

[Download Embertrail 0.2.1 for Windows x64](https://github.com/kevstermcgee/Embertrail/releases/download/v0.2.1/embertrail-setup-windows-x64.exe) · [All releases](https://github.com/kevstermcgee/Embertrail/releases) · [BlueEngineGames](https://kevstermcgee.github.io/BlueEngineGames/)

Vesper, the Bell Regent, stole the Dawnheart that warms Mote's village. Cross 32 authored courses in eight worlds, free their bound guardians, ring eight dawn bells, and bring the Dawnheart home. Characters greet Mote automatically, without dialogue choices.

This update tightens ground and air braking while preserving the full running jump, replaces repeated underground rooms with 32 regional routes, and keeps text inside readable panels. Thirty-four original interaction sounds give objects and actions their own feedback. Enemy graphics prepare before play, and a bounded course music cache removes full-track decoding from active platforming. Eight story-bound bosses and sixteen named compositions accompany the journey.

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

Run the installer to install the native game, soundtrack, and Start Menu shortcut; a desktop shortcut is optional. Saves and settings stay in `%LOCALAPPDATA%\BlueEngine` through upgrades and uninstall. Version 2 campaign and surface discoveries migrate to version 3; a save inside a replaced underground room resumes at its new entrance. Version 1 campaign discoveries are retained while the loaded course restarts at its entrance.

[Exact game source and development guide](https://github.com/kevstermcgee/BlueEngine/tree/045b10e4d5852cd2477522bd1ebec9ac59e5a953/games/embertrail).

The [verified Windows build](https://github.com/kevstermcgee/BlueEngine/actions/runs/38845576717) passed rule and snapshot tests, code checks, score validation, executable resources, shortcut and icon checks, isolated graphical launch, and installation, upgrade, and save-preserving uninstall. `native-release-proof.json` records the exact source, installer checksum, and all runtime file hashes. Distribution uses the native Windows installer EXE.
