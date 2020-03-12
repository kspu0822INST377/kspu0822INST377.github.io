document.getElementById("extraCredit").addEventListener("click", setCountry);

function setCountry() {
    const content = document.querySelector(".content");
    middle = ""
    countryList = new Array(25);

    for(let step = 0; step < 25; step++)
    {
        do {
            currentValue = countries[Math.floor(Math.random() * countries.length)];
          }
        while (countryList.includes(currentValue));
        countryList[step]= currentValue;
        middle += "<li>" + "<b>" + countryList[step].code +"</b>" + " " + countryList[step].name + "</li>";
    }
    content.innerHTML = "<ol class = \"country\">" + middle + "<\ol>";
  }


