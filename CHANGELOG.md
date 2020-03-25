# v0.6.9 (25 March 2019)
> Update: [socialmanagertools-igbot v0.9.21](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Upgrade: puppeteer 2.1.1 (chrome v80 required)
* Fix: likemode_realistic
* Fix: likemode_classic
* Fix: likemode_superlike
* Fix: commentmode_classic
* Fix: fdfmode_classic


# v0.6.8 (02 December 2019)
* Limits update: after august 2019 instagram decrease action/daily from 1000 to 300. If bot excede limits? Instagramm will ask you to change the password.
* Fix: app freeze after start with fdf mode.


# v0.6.7 (28 September 2019)
> Update: [socialmanagertools-igbot v0.9.19](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Upgrade: puppeteer 1.19.0 (chrome v77 required)
* Upgrade: electron to v6
* Package: different deb file for Ubuntu/Debian
* Package: windows 10 build now has installer
* Fix: UI issues (Show button on try icon)


# v0.6.6 (10 July 2019)
> Update: [socialmanagertools-igbot v0.9.18](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: UI issues.


# v0.6.5 (15 May 2019)
> Update: [socialmanagertools-igbot v0.9.17](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Perfomance: better, i tried fix lag of ui
* Upgrade: electron 5
* Upgrade: puppeteer 1.13.0
* Fix: password with double quotes #54
* Fix: min like/day #58
* Fix: waiting for selector failed: timeout 5000ms exceeded (mac only)
* Fix: Can't launch Chrome if SMT is running #38 (mac only - beta fix)
* Fix: minimize (linux gnome only - beta fix)
* Fix: if try open link on smt, popup and drawer go to close
* Fix: mac chrome open issue
* New: windows 32bit build
* New: community! Telegram and Discord
* New: patreon benefits!
* New: contributors to README.md


# v0.6.4 (01 April 2019)
> Update: [socialmanagertools-igbot v0.9.14](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: `waiting for selector "article div a:nth-child(1)" failed: timeout 30000ms exceeded` happen when photo don't exist or are removed, now skip faster (3sec)
* Fix: docker curl package missing
* Fix: docker permissions
* Fix: README.md misprint
* Downgrade: puppeteer v1.11.0


# v0.6.3 (28 March 2019)
> Update: [socialmanagertools-igbot v0.9.11](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* New: `instagrambotlib` and `instagram-bot.js` now is `socialmanagertools-igbot`
* New: npm package org: `npm install @social-manager-tools/igbot`
* Deprecated: rolling release version
* Fix: Login
* Fix: fdfmode_classic
* Upgrade: docker images
* Upgrade: puppeteer v1.12.2


# v0.6.2 (28 November 2018)
> Update: [socialmanagertools-igbot v0.9.10](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Developers: [Guidelines](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/nightly/DEV_GUIDELINES.md) for contributing at project.
* Test: add mocha and chai
* Fix: fdfmode_classic loop bug
* Upgrade: puppeteer v1.7.0


# v0.6.1 (16 October 2018)
> Fix: [socialmanager-gui](https://github.com/social-manager-tools/socialmanagertools-gui/), changelog:
* Fix: Wrong instructions on where to find Post you've liked #41
> Update: [socialmanagertools-igbot v0.9.9](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: fdfmode_classic #42 (again again...)
* Fix: 2FA (Location)
* Fix: Close button (ui)
* Fix: lose connection bot stop, now retry work.

# v0.6.0 (14 October 2018)
> Fix: [socialmanager-gui](https://github.com/social-manager-tools/socialmanagertools-gui/), changelog:
* Fix: bot remove space in comment_mode (socialmanagertools-igbot)
> Update: [socialmanagertools-igbot v0.9.8](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: fdfmode_classic #42 (again)
* Fix: 2FA doesn't work #48 (after 3 months... thanks instagram!)
* Update: default value of `chrome_headless` is `true`
* Update: all library of package.json


# v0.5.6 (05 October 2018)
> Update: [socialmanagertools-igbot v0.9.6](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: login random don't work
* Fix: fdfmode_classic #42


# v0.5.5 (02 October 2018)
> Update: [socialmanagertools-igbot v0.9.5](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md), changelog:
* Fix: likemode_classic new instagram selectors
* Fix: likemode_realistic new instagram selectors
* Fix: likemode_superlike new instagram selectors
* Fix: likemode_competitor_users new instagram selectors
* Fix: comment_mode new instagram selectors
* Fix: fdfmode_classic new instagram selectors
* API: Fix stop() again, now really work.
> Update: [socialmanagertools-twbot v0.2.5](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md), changelog:
* Fix: Startup error


# v0.5.4 (26 September 2018)
* Update: [socialmanagertools-igbot v0.9.4](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Update: [socialmanagertools-twbot v0.2.4](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md)


# v0.5.3 (22 September 2018)
* Update: [socialmanagertools-igbot v0.9.3](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Fix: various misprint and minor bug
* Feature: stop button work (instagrambot)


# v0.5.2 (15 September 2018)
* Update: [socialmanagertools-igbot v0.9.2](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Update: [socialmanagertools-twbot v0.2.3](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md)


# v0.5.1 (15 September 2018)
* Fix: in fdfmode_classic wrong check and bad alert
* Fix: clean log button after restart bot
* Update: [socialmanagertools-igbot v0.9.1](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Update: [socialmanagertools-twbot v0.2.2](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md)


# v0.5.0 (12 September 2018)
* Feature (instagram): fdfmode_classic
* Feature (instagram): comment_mode
* Feature (instagram): likemode_competitor_users
* Fix: stop bouncing chrome icon on macOS
* Update: [socialmanagertools-igbot v0.9.0c](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Update: [socialmanagertools-twbot v0.2.1](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md)


# v0.4.2 (31 July 2018)
* Feature: icons png to webp
* Fix: multiple popup of update message
* Update: [socialmanagertools-igbot v0.8.2](https://github.com/social-manager-tools/socialmanagertools-igbot/blob/master/CHANGELOG.md)
* Update: [socialmanagertools-twbot v0.2.0](https://github.com/social-manager-tools/socialmanagertools-twbot/blob/master/CHANGELOG.md)
* Coming Soon: Facebook Bot v0.1.0
* Coming Soon: Telegram for Wordpress v0.1.0
* Coming Soon: Telegram for Medium v0.1.0


# v0.4.1 (23 July 2018)
* Fix: missing build default config (twitterbot)


# v0.4.0 (23 July 2018)
* Fix: On macOS close button don't close app
* Feature: TwitterBot v0.1.0
* Feature: likemode_realistic (twitterbot)
* Feature: rtmode_realistic (twitterbot)
* Feature: 2FA Support (twitterbot)


# v0.3.1 (11 July 2018)

* Fix: download url for update app
* Fix: likemode_superlike timeout error
* Fix: Auto-refresh logs popup
* Feature: disable start button if bot is started
* Removed: tray icon on mac xos


# v0.3.0 (09 July 2018)

* Feature: tray icon
* Feature: icons on menu near labels
* Feature: Debugmode
* Feature: Error logs file
* Feature: 2FA pin (instagrambot)
* Feature: Set max and min like/day (instagrambot)
* Feature: likemode_classic (instagrambot)
* Feature: likemode_superlike (instagrambot)
* Coming Soon: TwitterBot v0.1.0


# v0.2.2 (03 July 2018)

* Update: socialmanagertools-igbot v0.7.5
* Fix: Update system
* Fix: Autoremove # from hashtag list
* Fix: Size app (~102 -> ~42mb)
* Fix: Random, bot insert more than 900 like/day


# v0.2.1 (29 June 2018)

* Feature: New UI
* Feature: Multi account
* Update: InstagramBot v0.7.4


# v0.1.0 BETA (19 March 2018)

* First Release
