const userInfo = document.querySelector("#user");

userInfo.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    fullName: e.target.elements.userName.value,
    phone: e.target.elements.userPhone.value,
    email: e.target.elements.email.value,
    address: e.target.elements.address.value,
    languages: e.target.elements.languages.value,
    evidence: e.target.elements.evidence.value,
    lan: e.target.elements.lan.value,
    interest: e.target.elements.interest.value,
    softskills: e.target.elements.softskills.value,
    usertel: e.target.elements.usertel.value,
    profile: e.target.elements.profile.value,
    skills: e.target.elements.skills.value,
    aboutperson: e.target.elements.aboutperson.value,
  };

  console.log(userData);
  e.preventDefault();
});