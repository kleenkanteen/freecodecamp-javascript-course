let myLeads = [];
const inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let deleteBtn = document.getElementById("delete-btn");
let ulEl = document.getElementById("ul-el");
ListItems = "";

const localLeads = JSON.parse(localStorage.getItem("leads"));
if (localLeads) {
    myLeads = localLeads;
    render();
}

function render() {
    ListItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        ListItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
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
    render();
});

deleteBtn.addEventListener("dblclick", function () {
    myLeads = [];
    localStorage.setItem("leads", JSON.stringify(myLeads));
    render();
});
