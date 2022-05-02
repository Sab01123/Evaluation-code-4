// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",funSab)

var matchArr =JSON.parse(localStorage.getItem("schedule")) || []

function funSab(){
    event.preventDefault()

    var mobj= {
        matchNumber : masaiForm.matchNum.value,
        teamA :   masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        Date : masaiForm.date.value,
        venue : masaiForm.venue.value
    }
    matchArr.push(mobj)
    console.log(mobj)
    localStorage.setItem("schedule",JSON.stringify(matchArr))
   window.location.href="matches.html"


}
