// write js code here corresponding to matches.html

var matchArr= JSON.parse(localStorage.getItem("schedule"))
displayData(matchArr)
var favFun= JSON.parse(localStorage.getItem("favourites")) || []

function displayData(data){
    data.forEach(function(ele){
        var tr = document.createElement("tr")

        var td1= document.createElement("td")
        td1.textContent= ele.matchNumber
        var td2= document.createElement("td")
        td2.textContent= ele.teamA
        var td3= document.createElement("td")
        td3.textContent= ele.teamB

        var td4= document.createElement("td")
        td4.textContent=ele.Date
        var td5= document.createElement("td")
        td5.textContent= ele.venue
        var td6= document.createElement("td")
        td6.textContent= "favourite"
        td6.style.color= "green"
        td6.style.cursor= "pointer"

        td6.addEventListener("click",function(){
            favFn(ele)
        })



        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

    })
    function favFn(ele){
        favFun.push(ele)
        console.log(ele)
        localStorage.setItem("favourites",JSON.stringify(matchArr))
        window.location.href="favourites.html"
    }
}