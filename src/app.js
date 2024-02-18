/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainSuffixes = [".com", ".es", ".net"];

  let domains = [];
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < domainSuffixes.length; d++) {
          let domain = pronoun[a] + adj[b] + noun[c] + domainSuffixes[d];
          domains.push(domain);
          console.log(domain);
        }
      }
    }
  }

  document.getElementById("domain").innerHTML = domains.join("<br>");
  document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload();
  });
};
