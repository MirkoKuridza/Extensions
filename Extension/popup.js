// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function popuniInfo(){
        
       var x = new XMLHttpRequest();
    x.open('GET', 'http://freegeoip.net/json/');
    x.onload = function() {
      var podaci = JSON.parse(x.responseText);
        
        document.getElementById("ip").innerHTML = "Ip Address: " + podaci.ip;
        document.getElementById("country").innerHTML = "Country name: " + podaci.country_name;
        document.getElementById("city").innerHTML = "City: " + podaci.city;
        document.getElementById("time_zone").innerHTML = "Time zone: " + podaci.time_zone;
    };
    x.send();
      }

      if(window.addEventListener){
        window.addEventListener('load',popuniInfo);
      }
      else{
        window.attachEvent('onload', popuniInfo);
      }


popuniInfo();
/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */



function getCurrentTabUrl(callback) {

  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
  
    
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
   
    if (match != null && match.length > 2 && typeof match[2] == 'string' && match[2].length > 0) {
    
    }
    else {
        alert("nista");
    }

    var x = new XMLHttpRequest();
    x.open('GET', 'http://freegeoip.net/json/' + match[2]);
    x.onload = function() {
      var podaci = JSON.parse(x.responseText);
        
        document.getElementById("ip").innerHTML = "Ip Address: " + podaci.ip;
        document.getElementById("country").innerHTML = "Country name: " + podaci.country_name;
        document.getElementById("city").innerHTML = "City: " + podaci.city;
        document.getElementById("time_zone").innerHTML = "Time zone: " + podaci.time_zone;
    };
    x.send();
    //var [] niz = url.split("/");
    //alert(niz[0]);
    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

 
}



document.addEventListener('DOMContentLoaded', () => {

  getCurrentTabUrl((url) => {
    


    // Load the saved background color for this page and modify the dropdown
    // value, if needed.
   

    // Ensure the background color is changed and saved when the dropdown
    // selection changes.
 
  });
});
