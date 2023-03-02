
const dev = document.getElementById('dev')
const kore = document.getElementById('kore')
const button = document.getElementById('confirm')
const answer = document.getElementById('answer')

button.addEventListener('click', () => {
    if (kore.value == "prime") {
        console.log("Yes!")
        answer.innerHTML = "Next location: Kore"
    } else {
        console.log("Atleast logging works!")
        answer.innerHTML = "Nope"
    }
})
