let form=document.querySelector('form')


form.addEventListener('submit',(obj)=>{
    obj.preventDefault();
    const income=document.querySelector('#income')
    const amount=parseInt(income.value);
    
    let totalamount=0;
    if(amount<=1200000){
        totalamount=0;
    }
    else if(amount<=1600000){
        totalamount=(amount-1200000)*0.15;
    }
     else if(amount<=2000000){
        totalamount=(amount-1600000)*0.20+60000;
    }
     else if(amount<=2400000){
        totalamount=(amount-2000000)*0.25+80000+60000;
    }
    else(
        totalamount=(amount-2400000)+2400000
    )

    let result=document.querySelector('h2')
    result.textContent=`Income Tax : ${totalamount}`

    form.reset();
})