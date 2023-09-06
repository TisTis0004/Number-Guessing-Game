function start (){
    const secret = Math.floor(Math.random() * 10) + 1
    const btn = document.getElementById('guessBtn')
    const result = document.getElementById('result')
    const guess = document.getElementById('input')
    let cnt = 0

    result.innerText = null
    guess.value = ""

    btn.onclick = () => {
        const x = guess.value
        if(x == "")   
            result.innerText = "Please enter a Number."
        else if(x < secret){
            cnt++
            result.innerText = "Your number is less than the secret number."
        }
        else if(x > secret ){
            cnt++
            result.innerText = "Your number is greater than the secret number."
        }
        else{
            cnt++
            result.innerText = "You are correct the number is " + secret + ", you've got it in : " + cnt + " guesses."
        }
    }
}
start()
const rbtn = document.getElementById('reset')
rbtn.onclick = start