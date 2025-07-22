let input = document.getElementById("input")
let btn = document.getElementById("btn")
let botrps = document.getElementById("botrps")
let chatBody = document.querySelector(".chatBody")
btn.addEventListener("click", () => {
    
    let urMssg = document.createElement("p")
    let resEl = document.createElement("p")

    urMssg.setAttribute("id", "ugermssg")
    urMssg.setAttribute("class", "ugermssg")
    urMssg.innerText = input.value
    chatBody.appendChild(urMssg)

    if(navigator.onLine !==true ){
        resEl.innerText = "You are offline"
        resEl.setAttribute("id", "botmssg")
        resEl.setAttribute("class", "botmssg")
        chatBody.appendChild(resEl)
        return
    }

    puter.ai.chat(input.value, { model: "gpt-4.1-nano" })
        .then(response => {
            resEl.innerText = response.message.content
            resEl.setAttribute("id", "botmssg")
            resEl.setAttribute("class", "botmssg")
            chatBody.appendChild(resEl)
            console.log(response.message.content)
        })

})
