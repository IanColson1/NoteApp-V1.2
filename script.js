const SaveBtn = document.getElementById('Save')
const title = document.querySelector("[data-title]")
const description = document.querySelector("[data-description]")
const PopBtn = document.querySelector(".addNote")
const Pop = document.querySelector(".inpSecPop")
const notes = document.querySelector(".notes")
const overlay = document.querySelector(".overlay")
const UB = document.querySelector(".UsernameD")



const sound = new Audio('CLICK.wav')
const WelcomeS = new Audio("click (2).wav")

	const date = new Date()
	const month = date.getMonth()
	const day = date.getDay()
	const Hours = date.getHours()
	const minutes = date.getMinutes()

	if (Hours < 10) {
		Hours.innerHTML = "0" + Hours
	}
	if (minutes < 10) {
		minutes.innerHTML = "0" + minutes
	} 


months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

PopBtn.addEventListener("click", () => {
	Pop.classList.add("openPop")
	overlay.classList.add("Ovshow")
	sound.play()
})

SaveBtn.addEventListener("click", () => {
	let titleV = title.value
	let descriptionV = description.value

	note = document.createElement("div")
	note.classList.add("noteContainer")
	note.innerHTML = `<div class="ttlL">${titleV}</div>
		<div class="text">${descriptionV}</div>
		<div class="date">${day} ${months[month]} ${Hours}:${minutes}</div>
	` 
	// notes.appendChild(note)
	Pop.classList.remove("openPop")
	overlay.classList.remove("Ovshow")

	sound.play()
	
	if (titleV == "" && descriptionV == "") {
		alert("Type Something")
	}
	else{
		notes.appendChild(note)
		title.value = ""
		description.value = ""
	}	
})
overlay.addEventListener("click", () => {
	Pop.classList.remove("openPop")
	overlay.classList.remove("Ovshow")
})
addEventListener("DOMContentLoaded", () => {	
	document.querySelector("form").addEventListener("submit", () => {
	Username = document.getElementById('UsernameT').value
	localStorage.setItem("Username", Username)
	})

	if(!localStorage.getItem("Username")){
		UB.classList.add("Upop")
		Username = document.getElementById('UsernameT').value

		localStorage.setItem("Username", Username)		
		
	}
	else if(localStorage.getItem("Username")){
		overlay.classList.add("Ovshow")
		document.querySelector(".welcomeT").classList.add("WT")
		document.querySelector(".welcomeT").innerHTML = "Welcome " + localStorage.getItem("Username")
		setTimeout(() => {document.querySelector(".welcomeT").classList.remove("WT"); document.querySelector(".overlay").classList.remove("Ovshow")}, 3000)	
			
	}
	
})
