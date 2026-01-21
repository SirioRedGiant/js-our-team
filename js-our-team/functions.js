function rendererTeam(container) {
  container.innerHTML = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    const cardHtml = `<div class="card-team-member">
          <img class="member-img" src="./${member.img}" alt="${member.img}" />
          <div class="member-dati">
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            <a class="member-email" href="${member.email}"
              >${member.email}</a
            >
          </div>
        </div>
  `;

    container.innerHTML += cardHtml;
  }
}
