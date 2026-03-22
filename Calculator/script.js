
const display = document.querySelector('input');
const buttons = document.querySelectorAll('.item')
let ans = "";   // by default empty

buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
        const value = button.innerText;

        switch(value){
            case "CL":
                ans = ""
                display.value = ""
                break;
            case "DEL":
                ans = ans.slice(0,-1);
                display.value = ans;
                break;
            case "=":
                try{
                    ans = eval(ans).toString();
                    display.value = ans;  
                }catch(error){
                    display.value = "Error"
                    ans = ""
                }        
                break;
            default:
                ans += value;
                display.value = ans;      
        }
    })
})