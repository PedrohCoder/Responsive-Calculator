let calc = document.getElementById("input-calc");
const typecalc = Array.from(document.getElementsByClassName("number"));
const typeoper = Array.from(document.getElementsByClassName("operator"));
const cleaninput = document.getElementById('clean');

typecalc.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      default:
        if (calc.value != 'undefined' && calc.value != "error")
        {
            calc.value += e.target.value;
        }



    }
  });
});

typeoper.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "=":
        try {
          calc.value = eval(calc.value);
        } catch {
          calc.value = "Error";
        }
        break;
      default:
        if(calc.value != 'undefined' && calc.value != 'error')
        {
            calc.value += e.target.value;
        }
    }
  });
});

cleaninput.addEventListener("click", (onclean) => {
    calc.value = '';
})