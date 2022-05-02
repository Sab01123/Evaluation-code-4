// write js code here corresponding to favourites.html

var favArr= JSON.parse(localStorage.getItem("favourites"))


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
       var td6= document.createElement("button")
       td6.textContent= "Delete"
       td6.addEventListener("click",function(){
        deleteItem(ele,index) 
       })
        function deleteItem(ele,index){
            favArr.splice(index,1)
            localStorage.setItem("favourites",JSON.stringify(favArr))
window.location.reload()

        }

        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

    })
    
}