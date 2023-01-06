import "./main.css";

import { hello } from "./hello.coffee";

const boot = () => {
	console.log("✌️");
	let div = document.createElement("div")
	div.setAttribute("class","text-2xl")
	div.innerText = hello() + " World!"
	
	let id = document.getElementById("app")
	id.appendChild(div)
}

boot();