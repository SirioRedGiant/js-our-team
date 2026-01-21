const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const staffContainer = document.getElementById("members-container");
rendererTeam(staffContainer);

//^ Gestione del form

const memberForm = document.getElementById("add-team-member");

memberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //note recupero i valori degli input
  const name = document.getElementById("new-member-name").value;
  const role = document.getElementById("new-member-role").value;
  const email = document.getElementById("new-member-email").value;
  const img = document.getElementById("new-member-img").value;

  const newMember = {
    name: name,
    role: role,
    email: email,
    img: img,
  };

  teamMembers.push(newMember);

  //note devo svuotare i campi del form per una nuova aggiunta

  const inputs = memberForm.querySelectorAll("input");
  //todo ciclo su ogni input e svuoto il valore
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  rendererTeam(staffContainer);
});
