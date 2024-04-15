// ==UserScript==
// @name         YouTube Shorts Limiter
// @description  YouTube Shorts で一定回数以上スクロールできなくする User Script
// @author       TwoSquirrels
// @license      MIT
// @namespace    https://github.com/TwoSquirrels
// @version      0.1.0
// @match        https://*.youtube.com/shorts/*
// ==/UserScript==

// YouTube Shorts で一度に観れる動画の数の上限
const YT_SHORTS_LIMIT = 1;

setInterval(() => {
  while (true) {
    const lastVideo = [...document.getElementsByClassName("reel-video-in-sequence")].pop();
    if (!(lastVideo && Number(lastVideo.id) >= YT_SHORTS_LIMIT)) break;
    lastVideo.remove();
  }
}, 1000);
