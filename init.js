
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById ('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById ('surnameOutput').innerText = initPerson.surName;
    document.getElementById ('genderOutput').innerText = initPerson.gender;
    document.getElementById ('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById ('middleNameOutput').innerText = initPerson.patronymic;
    document.getElementById ('professionOutput').innerText = initPerson.profession;

};

