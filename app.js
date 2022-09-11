
const revenue = document.getElementById("revenue-input")
const growth = document.getElementById("growth-input")
const renewal = document.getElementById("renewal-input")
const value = document.getElementById("value")
const results = document.getElementById("results")


value.addEventListener("click", ()=>{
    var value = revenue.value * (growth.value / 100) * 10 * (renewal.value / 100)

    value =  Math.round((value + Number.EPSILON) * 100) /100;
    value = value.toLocaleString("en-US")
    results.innerText = value
})

// ARR x growth x 10 x renewal rate 