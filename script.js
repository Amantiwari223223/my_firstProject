const addStanger = document.querySelector("h5")

const addFriend = document.querySelector("#add")

const removeFriend = document.querySelector("#remove")


add.addEventListener("click",function(){
    addStanger.innerHTML = "Friends"
    addStanger.style.color = 'green'
})

removeFriend.addEventListener("click" , function(){
    addStanger.innerHTML = "Stranger"
    addStanger.style.color = 'red'
})