"use strict";const usersList=document.querySelector(".js-users"),url="https://randomuser.me/api/?results=10",btnSave=document.querySelector(".js-btn-save"),btnRecover=document.querySelector(".js-btn-recover");let usersData=[];function renderUserList(e){for(const s of e)usersList.innerHTML+=renderUser(s);addEventToUser()}function renderUser(e){if(!0===e.isFriend){return` <li>\n            <article class="user selected js-li-user" id=${e.login.username}>\n               <h2 class="user__name">${e.name.first} ${e.name.last}</h2>\n               <img class="user__img" src=${e.picture.medium} alt="image"/>\n               <h3 class="user__city">${e.location.city}</h3>\n               <h3 class="user__username">${e.login.username}</h3>\n            <article/>\n         </li>`}return` <li>\n           <article class="user js-li-user" id=${e.login.username}>\n              <h2 class="user__name">${e.name.first} ${e.name.last}</h2>\n              <img class="user__img" src=${e.picture.medium} alt="image"/>\n              <h3 class="user__city">${e.location.city}</h3>\n              <h3 class="user__username">${e.login.username}</h3> \n            <article/>\n        </li>`}function handleClick(e){const s=e.currentTarget.id;usersData.find(e=>e.login.username===s).isFriend=!0,document.getElementById(s).classList.toggle("selected"),usersList.innerHTML="",renderUserList(usersData)}function addEventToUser(){const e=document.querySelectorAll(".js-li-user");for(const s of e)s.addEventListener("click",handleClick)}function handleClickSave(){localStorage.setItem("usersList",JSON.stringify(usersData))}function handleClickRecover(){usersData=JSON.parse(localStorage.getItem("usersList")),usersList.innerHTML="",renderUserList(usersData)}fetch(url).then(e=>e.json()).then(e=>{usersData=e.results,renderUserList(usersData)}),btnSave.addEventListener("click",handleClickSave),btnRecover.addEventListener("click",handleClickRecover);