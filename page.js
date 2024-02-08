let input = document.querySelector("#search");
let list = document.querySelectorAll("li")
let li = Array.from(list)

input.addEventListener("keyup",(e) => {
    
    for (let i = 0; i < list.length; i++) {
        let val = input.value.toUpperCase()
        let a = li[i].innerText.toUpperCase()
        if (a.indexOf(val) > -1) {
            li[i].style.display = ""
        }else{
            li[i].style.display = "none"
        }
    }
    
})

li.forEach((item) => {
    item.addEventListener("click",(e) => {
        input.value = item.innerText
})

})