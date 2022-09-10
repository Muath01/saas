const revenue = document.getElementById("revenue-input")
const growth = document.getElementById("growth-input")
const renewal = document.getElementById("renewal-input")
const value = document.getElementById("value")



value.addEventListener("click", ()=>{
    console.log(revenue.value * (growth.value / 100) * 10 * (renewal.value / 100))
})

// ARR x growth x 10 x renewal rate 