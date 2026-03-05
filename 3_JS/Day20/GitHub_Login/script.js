
async function github(){
 
    try{   // try yah error ke sondition par chalta hai yadi netwoek DNS server error le case me 
        const info = await fetch("https://api.github.com/users");
        if(!info.ok){
            console.log("data are not present ")
        }
        const data = await info.json()

        const parent = document.getElementById("first");

        for(let obj of data){

            const element = document.createElement("div")
            element.classList.add("element");

            const image = document.createElement("img")
            image.src = obj.avatar_url

            const userName = document.createElement("h2")
            userName.textContent =obj.login

            const anchor = document.createElement("a")
            anchor.href =obj.html_url;
            anchor.textContent = "Visite Profile"

            element.append(image,userName,anchor);

            parent.append(element);
        }
    }
    catch(error){
        console.log(error)
    }
}

github();