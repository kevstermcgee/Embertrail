# Embertrail releases

This repository publishes Embertrail's verified native Windows installer. The game source lives in `kevstermcgee/BlueEngine`; pin every release and workflow to an exact public source commit.

## User delivery expectation

Unless the user explicitly requests local-only work, a verified game update includes a new versioned installer release, the BlueEngineGames catalog and release history update, and verification that the deployed Pages site links to the new download. Carry authorized updates through that delivery without routine confirmation. Honor any later user instruction that narrows the scope.

## Required release work

1. Complete the existing native gates for the exact game source: rule and snapshot tests, formatting and Clippy, score and asset checks, native executable resources, shortcut and window icons, isolated graphical package launch, and installer installation, upgrade, uninstall, and save/settings retention. Do not replace these gates with compilation alone or redesign the workflow to bypass a failure.
2. Keep the game version, Inno `AppVersion`, release version, pinned source, and proof consistent. Preserve the stable `BlueEngineGames.embertrail` AppId and existing player storage paths so upgrades retain progress and settings.
3. Derive `native-release-proof.json` from the successful Windows artifact and its `ship.json`. Verify the installer size and SHA256, native executable hash, and every declared runtime file hash before publication. Record the actual build repository, workflow run, and source commit; a metadata commit is not the game build commit.
4. Publish a new versioned release in `kevstermcgee/Embertrail` containing `embertrail-setup-windows-x64.exe`, its checksum, and proof. Publish the verified native Windows x64 installer EXE. Preserve older releases and their assets; do not overwrite an earlier version or substitute a ZIP or browser build.
5. Update Embertrail in `kevstermcgee/BlueEngineGames` under `site/released-games.json`. Move the previous current release into history without losing older entries. Preserve other games. Use the versioned installer URL, exact asset size, `sha256:` digest, and pinned game source URL. Never use a moving `/latest/` URL in catalog release metadata.
6. Run the existing site checks and verify the Pages deployment and live Embertrail page. Confirm the displayed version, current download, older versions, source link, and published installer bytes match the release metadata. A local site build or successful release upload alone does not complete delivery.
7. Report the live game/download links, published version, exact source, and relevant verification. Keep software captures and automated input checks distinct from physical controller or speaker testing; claim only the review actually performed.

Do not commit build outputs, player saves, settings, tokens, or session logs. The workflow only retrieves pinned source and verifies artifacts; release publication and catalog deployment remain explicit delivery steps.
