let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let deleteBtn = document.getElementById("delete-btn");
let ulEl = document.getElementById("ul-el");
let tabBtn = document.getElementById("tab-btn");
ListItems = "";

const localLeads = JSON.parse(localStorage.getItem("leads"));
if (localLeads) {
    myLeads = localLeads;
    render(myLeads);
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("leads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

function render(leadsList) {
    ListItems = "";
    for (let i = 0; i < leadsList.length; i++) {
        ListItems += `
        <li>
            <a target='_blank' href='${leadsList[i]}'>
                ${leadsList[i]}
            </a>
        </li>
        `;
    }
    ulEl.innerHTML = ListItems;
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    localStorage.setItem("leads", JSON.stringify(myLeads));
    inputEl.value = "";
    render(myLeads);
});

deleteBtn.addEventListener("dblclick", function () {
    myLeads = [];
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render(myLeads);
});
