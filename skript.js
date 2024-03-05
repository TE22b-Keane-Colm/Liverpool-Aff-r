let total = 0;
function addKundvagn(fotboll,pris)
{
  console.log(fotboll, " ", pris);


      total += pris;
  document.querySelector("#vagn-items").innerHTML +=
"<li>" + fotboll + " - " + pris + " kr</li>";
  document.getElementById("vagn-total").textContent = total.toFixed(2);

}
function tabortvagn(params)
 {
  document.querySelector("#vagn-items").innerHTML = ""; 
  document.getElementById("vagn-total").textContent = 0;
  total = 0;
}
