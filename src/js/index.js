/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Domain Name Generator AAGUILAR");
};

let domains = []; //create the array
let domainName = ""; //define the array as a string

//domain name components, strings
let pronoun = ["biz", "bus"];
let separator = ["-", ""];
let adj = ["machine", "engine", "motor"];
let extension = [".com", ".net", ".co"];

//nested loop. Nesting makes each combination possible by not returning a result before checking the next component
for (let i = 0; i < pronoun.length; i++) {
  //when doing nested loops, use different variable names
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < separator.length; y++) {
      for (let z = 0; z < extension.length; z++) {
        domainName = pronoun[i].concat(separator[y], adj[x], extension[z]); //assign the concatenated string to the variable
        domains.push(domainName); //push the variable into the aray
        //console.log(pronoun[i] + separator[0] + adj[x] + extension[z]);
      }
    }
  }
}
//console.log(domains); Print the array in the console (for testing purposes)

const domainList = document.createElement("ul"); //create an html element (list)
domainList.innerHTML = "This is a Domain List"; //assign the innerHTML to the newly created element
document.getElementById("listOfDomains").appendChild(domainList); //call the div where to put the newly created element and append it to it

domains.sort(); //sort list before looping

for (let i = 0; i < domains.length; i++) {
  //loop to add each item in the array as a child to the ul element created above
  //when going back to one loop, go back to i as the variable
  let eachDomain = document.createElement("li");
  eachDomain.innerHTML = domains[i];
  document.getElementById("listOfDomains").appendChild(eachDomain);
}
