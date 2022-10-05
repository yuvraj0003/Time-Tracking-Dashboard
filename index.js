// import json file
import data from './data.json' assert { type: 'json' };

// selectors
const items = document.querySelectorAll(".items");

const buttons = document.querySelectorAll(".profile-btn > p");



// content to be changed
const content = (time) =>{
    for(var i = 0 ; i < data.length; i++){
        items[i].innerHTML =    `
        <p>${data[i].title}</p>
        <br>
        <h1>${data[i]["timeframes"][time]["current"]}hrs</h1>
        <br>
        <p>last ${time} - ${data[i]['timeframes'][time]["previous"]} hrs</p>
        `
    }

}


// Click event to change contents
let time;
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mousedown" , function(){
        time = this.innerHTML.toLowerCase();
        content(time);
    })
}