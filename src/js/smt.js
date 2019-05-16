const fs = require("fs");
const remote = require("electron").remote;
const remoteapp = remote.app;
const Jtr = require("json-token-replace");
const jtr = new Jtr();
var list_actived_bot = [];
var logs_interval = null;
$.ajaxSetup({ cache: false });

var donatehtml = "<h3>Donate</h3>Support me with <b>1$</b> or more... Why? More updates, more feature and better quality!<br /><br /><a class='link external' href='http://patreon.ptkdev.io'><img src=\"./img/icons/patreon-button.png\" width='80%' height='36px' style='border-radius: 15px;'></a><br /><a  class='link external' href='http://paypal.ptkdev.io'><img src=\"./img/icons/paypal-button.png\" style='border-radius: 15px;' width='80%'></a><br /><h3>Join to Community</h3>Need support or friends?<br />Join to <a  class='link external' href='http://telegram.ptkdev.io'><img src='./img/icons/telegram.png' style='width: 16px; height: 16px;display: block-inline;'> Telegram</a> or <a  class='link external' href='http://discord.ptkdev.io'><img src='./img/icons/discord.png' style='width: 16px; height: 16px;display: block-inline;'> Discord</a>!";

function update_system() {
    $.get("https://api.socialmanager.tools/v2/gui/version/?time=" + new Date().getTime(), function(json) {
        let version = json.master.version;
        let current_version = require("../version").version;
        let download_url = "https://socialmanager.tools/";
        if (process.platform === "linux") {
            download_url = "https://github.com/social-manager-tools/socialmanagertools-gui/releases/download/" + version + "/Social.Manager.Tools-" + version + ".deb";
        } else if (process.platform === "win32") {
            download_url = "https://github.com/social-manager-tools/socialmanagertools-gui/releases/download/" + version + "/Social.Manager.Tools-" + version + ".zip";
        } else if (process.platform === "darwin") {
            download_url = "https://github.com/social-manager-tools/socialmanagertools-gui/releases/download/" + version + "/Social.Manager.Tools-" + version + ".dmg";
        }

        if (version != current_version) {
            app.dialog.create({ title: "Update available", text: "Your app version is v" + current_version + "<br />Is available v" + version + "<br /><br /><a  class='link external' href='" + download_url + "'>DOWNLOAD</a> | <a class='link external'  href='https://github.com/social-manager-tools/socialmanagertools-gui/blob/master/CHANGELOG.md'>CHANGELOG</a>"+donatehtml, buttons: [{ text: "OK" }] }).open();
        }
    });
}

setInterval(function() {
    if(!$(".dialog")[0]) {
        update_system();
    }
}, (43200 * 1000)); // 12h
update_system();
