# Embertrail

A little light. A very big adventure. Embertrail 0.2.0 is an original, controller-first platforming adventure built with BlueEngine.

[Download Embertrail 0.2.0 for Windows x64](https://github.com/kevstermcgee/Embertrail/releases/download/v0.2.0/embertrail-setup-windows-x64.exe) · [All releases](https://github.com/kevstermcgee/Embertrail/releases) · [BlueEngineGames](https://kevstermcgee.github.io/BlueEngineGames/)

Vesper, the Bell Regent, stole the Dawnheart that warms Mote's village. Cross 32 authored courses in eight worlds, free their bound guardians, ring eight dawn bells, and bring the Dawnheart home. Characters greet Mote automatically, without dialogue choices.

This update adds eight different boss battles, polished original pixel art, clearer hollow-root stairways, and sixteen named compositions for the worlds, secrets, guardians, and homecoming. One consistent jump, forgiving ledge takeoffs, buffered landings, and responsive movement support the journey's growing difficulty.

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

The pause menu includes checkpoint and course restarts, music and sound controls, the trail atlas, return to title, and Quit game. Choose **Download this song** to save the named track currently playing as an exact WAV in **Downloads / Embertrail Soundtrack**. Title options also offer its song download. Progress saves automatically.

Run the installer to install the native game, soundtrack, and Start Menu shortcut; a desktop shortcut is optional. Saves and settings stay in `%LOCALAPPDATA%\BlueEngine` through upgrades and uninstall. Older campaign discoveries migrate to the new save format; the current course restarts at its entrance because its geometry and movement have changed.

[Exact game source and development guide](https://github.com/kevstermcgee/BlueEngine/tree/051aee8117835d0075278d63f3deef92c7fc056c/games/embertrail).

The [verified Windows build](https://github.com/kevstermcgee/BlueEngine/actions/runs/38838535413) passed rule and snapshot tests, code checks, score validation, executable resources, shortcut and icon checks, isolated graphical launch, and installation, upgrade, and save-preserving uninstall. `native-release-proof.json` records the exact source, installer checksum, and all runtime file hashes. Distribution uses the native Windows installer EXE.
