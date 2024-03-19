const body = document.querySelector("#container");
const teamContainer = document.querySelector("#teams-display");
const input = document.querySelector("#number");
const btn = document.querySelector("#pick-teams");
const label = document.querySelector("#label");
const list = document.querySelector("#list");
const resetBtn = document.querySelector("#reset");

const allTeams = [
    "Wagner/Howard",
    "Colorado St./Virginia",
    "Grambling/Montana St.",
    "Colorado/Boise St.",
    "Mississippi St.",
    "Michigan St.",
    "BYU",
    "Duquesne",
    "Creighton",
    "Akron",
    "Arizona",
    "Long Beach St.",
    "North Carolina",
    "Illinois",
    "Moorehead St.",
    "South Carolina",
    "Oregon",
    "Dayton",
    "Nevada",
    "Texas",
    "Kentucky",
    "Oakland",
    "Gonzaga",
    "McNeese",
    "Iowa St.",
    "South Dakota St.",
    "Tennessee",
    "St. Peter's",
    "Texas Tech",
    "NC State",
    "Kansas",
    "Samford",
    "Washington St",
    "Drake",
    "Florida Atlantic",
    "Northwestern",
    "Baylor",
    "Colgate",
    "San Diego St.",
    "UAB",
    "Marquette",
    "Western Kentucky",
    "UConn",
    "Stetson",
    "Clemson",
    "New Mexico",
    "Auburn",
    "Yale",
    "Florida",
    "Nebraska",
    "Texas A&M",
    "Duke",
    "Vermont",
    "Purdue",
    "Alabama",
    "College of Charleston",
    "Houston",
    "Longwood",
    "Wisconsin",
    "James Madison",
    "Utah St.",
    "TCU",
    "St. Mary's",
    "Grand Canyon",
];

let chosenTeams = [];

let teams = [];

allTeams.forEach((el) => {
    teams.push(el);
});

btn.addEventListener("click", () => {
    console.log(allTeams);
    if (chosenTeams.length > 0) {
        document.querySelectorAll("#item").forEach((el) => {
            el.remove();
        });
    }
    chosenTeams = [];
    if (!input.value) {
        label.textContent = "Enter a number";
        input.classList.add("error");
    } else {
        label.textContent = "";
        input.classList.remove("error");
        let num = input.value;
        pickTeams(num);
        chosenTeams.forEach((el) => {
            const listItem = document.createElement("li");
            listItem.id = "item";
            list.appendChild(listItem);
            listItem.textContent = el;
        });
    }
});

function pickTeams(num) {
    for (let i = 0; i < num; i++) {
        let index = Math.floor(Math.random() * teams.length);
        chosenTeams.push(teams[index]);
        teams.splice(index, 1);
    }
    if (teams.length == 0) {
        label.textContent = `That's all the teams!`;
        btn.disabled = true;
    } else {
        return chosenTeams;
    }
}

resetBtn.addEventListener("click", () => {
    allTeams.forEach((el) => {
        teams.push(el);
    });
    btn.disabled = false;
    label.textContent = "";
    input.value = "";
    document.querySelectorAll("#item").forEach((el) => {
        el.remove();
    });
});
