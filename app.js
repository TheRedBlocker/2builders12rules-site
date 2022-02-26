window.onload = async function () {
  const banBtn = document.getElementById("ban-btn");
  const muteBtn = document.getElementById("mute-btn");
  const homeBtn = document.getElementById("home-btn");
  const punishmentBtn = document.getElementById("punishments-btn");
  const rulesBtn = document.getElementById("rules-btn");

  const banList = document.getElementById("ban-list");
  const banHyphens = document.getElementById("ban-hyphens");
  const banRules = document.getElementById("ban-rules");
  const banInfo = document.getElementById("ban-info");

  const muteList = document.getElementById("mute-list");
  const muteHyphens1 = document.getElementById("mute-hyphens1");
  const muteHyphens2 = document.getElementById("mute-hyphens2");
  const muteRules = document.getElementById("mute-rules");
  const muteInfo = document.getElementById("mute-info");
  const muteStatus = document.getElementById("mute-status");

  const titleMain = document.getElementById("titleMain");
  const titleExplanation = document.getElementById("titleExplanation");
  const titleSubmit = document.getElementById("titleSubmit");

  const punishmentTxt = document.getElementById("punishmentTxt");
  const punishmentTtl = document.getElementById("punishmentTtl");

  const rulesTxt = document.getElementById("rulesTxt");
  const rulesTtl = document.getElementById("rulesTtl");

  homeBtn.onclick = function (e) {
    banList.classList.add("disabled");
    banHyphens.classList.add("disabled");
    banRules.classList.add("disabled");
    banInfo.classList.add("disabled");

    muteList.classList.add("disabled");
    muteHyphens1.classList.add("disabled");
    muteHyphens2.classList.add("disabled");
    muteRules.classList.add("disabled");
    muteInfo.classList.add("disabled");
    muteStatus.classList.add("disabled");

    titleMain.classList.remove("disabled");
    titleExplanation.classList.remove("disabled");
    titleSubmit.classList.remove("disabled");

    punishmentTxt.classList.add("disabled");
    punishmentTtl.classList.add("disabled");

    rulesTxt.classList.add("disabled");
    rulesTtl.classList.add("disabled");

    document.title = "2builders12rules Info";
  };

  punishmentBtn.onclick = function (e) {
    banList.classList.add("disabled");
    banHyphens.classList.add("disabled");
    banRules.classList.add("disabled");
    banInfo.classList.add("disabled");

    muteList.classList.add("disabled");
    muteHyphens1.classList.add("disabled");
    muteHyphens2.classList.add("disabled");
    muteRules.classList.add("disabled");
    muteInfo.classList.add("disabled");
    muteStatus.classList.add("disabled");

    titleMain.classList.add("disabled");
    titleExplanation.classList.add("disabled");
    titleSubmit.classList.add("disabled");

    punishmentTxt.classList.remove("disabled");
    punishmentTtl.classList.remove("disabled");

    rulesTxt.classList.add("disabled");
    rulesTtl.classList.add("disabled");

    document.title = "2b2t Punishments";
  };

  rulesBtn.onclick = function (e) {
    banList.classList.add("disabled");
    banHyphens.classList.add("disabled");
    banRules.classList.add("disabled");
    banInfo.classList.add("disabled");

    muteList.classList.add("disabled");
    muteHyphens1.classList.add("disabled");
    muteHyphens2.classList.add("disabled");
    muteRules.classList.add("disabled");
    muteInfo.classList.add("disabled");
    muteStatus.classList.add("disabled");

    titleMain.classList.add("disabled");
    titleExplanation.classList.add("disabled");
    titleSubmit.classList.add("disabled");

    punishmentTxt.classList.add("disabled");
    punishmentTtl.classList.add("disabled");

    rulesTxt.classList.remove("disabled");
    rulesTtl.classList.remove("disabled");

    document.title = "2b2t Rules";
  };

  banBtn.onclick = function (e) {
    banList.classList.remove("disabled");
    banHyphens.classList.remove("disabled");
    banRules.classList.remove("disabled");
    banInfo.classList.remove("disabled");

    muteList.classList.add("disabled");
    muteHyphens1.classList.add("disabled");
    muteHyphens2.classList.add("disabled");
    muteRules.classList.add("disabled");
    muteInfo.classList.add("disabled");
    muteStatus.classList.add("disabled");

    titleMain.classList.add("disabled");
    titleExplanation.classList.add("disabled");
    titleSubmit.classList.add("disabled");

    punishmentTxt.classList.add("disabled");
    punishmentTtl.classList.add("disabled");

    rulesTxt.classList.add("disabled");
    rulesTtl.classList.add("disabled");

    document.title = "2b2t Prio Ban List";
  };

  muteBtn.onclick = function (e) {
    banList.classList.add("disabled");
    banHyphens.classList.add("disabled");
    banRules.classList.add("disabled");
    banInfo.classList.add("disabled");

    muteList.classList.remove("disabled");
    muteHyphens1.classList.remove("disabled");
    muteHyphens2.classList.remove("disabled");
    muteRules.classList.remove("disabled");
    muteInfo.classList.remove("disabled");
    muteStatus.classList.remove("disabled");

    titleMain.classList.add("disabled");
    titleExplanation.classList.add("disabled");
    titleSubmit.classList.add("disabled");

    punishmentTxt.classList.add("disabled");
    punishmentTtl.classList.add("disabled");

    rulesTxt.classList.add("disabled");
    rulesTtl.classList.add("disabled");

    document.title = "2b2t Mute List";
  };

  let banListArrNames = [];
  let banListArrRules = [];
  let banListArrHyphens = [];
  var mutesJson = mutes;
  var bansJson = bans;
  //var mutesJson = mutesJsonP.innerText;
  //var bansJson = bansJsonP.innerText;

  for (let i = 0; i < bansJson.length; i++) {
    banListArrNames.push(bansJson[i].username);
    banListArrHyphens.push("-");
    bansJson[i].rules != "none" ? banListArrRules.push(bansJson[i].rules) : banListArrRules.push("None Known");
  }

  let banInfoStr = `Current Known Prio Bans: ${bansJson.length} <br> Last Updated: 26 February 2022`;

  banList.innerHTML = banListArrNames.join("<br>");
  banHyphens.innerHTML = banListArrHyphens.join("<br>");
  banRules.innerHTML = banListArrRules.join("<br>");
  banInfo.innerHTML = banInfoStr;

  let muteListArrNames = [];
  let muteListArrRules = [];
  let muteListArrStatus = [];
  let muteListArrHyphens = [];

  for (let i = 0; i < mutesJson.length; i++) {
    muteListArrNames.push(mutesJson[i].username);
    muteListArrHyphens.push("-");
    muteListArrStatus.push(mutesJson[i].type);
    mutesJson[i].rules != "none" ? muteListArrRules.push(mutesJson[i].rules) : muteListArrRules.push("None Known");
  }

  let muteInfoStr = `Current Known Mutes: ${mutesJson.length} <br> Last Updated: 26 February 2022`;

  muteList.innerHTML = muteListArrNames.join("<br>");
  muteHyphens1.innerHTML = muteListArrHyphens.join("<br>");
  muteHyphens2.innerHTML = muteListArrHyphens.join("<br>");
  muteRules.innerHTML = muteListArrRules.join("<br>");
  muteInfo.innerHTML = muteInfoStr;
  muteStatus.innerHTML = muteListArrStatus.join("<br>");
};
