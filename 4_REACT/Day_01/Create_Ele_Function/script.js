
  // create element using function

function create(tag,attributes,childreen){
    // tag that mean tag name 
    // attribute that means class and id etc.
    // childreen that means taxt name

    const element = document.createElement(tag);
    element.textContent = childreen;
            // attributes me hame travers karna padega kyu ki miltiple value hote hai
            for(const value in attributes){
                if(value=='style'){
                    Object.assign(element.style,attributes.style)
                      // object.assign() ka use ek properties ko dusre me asign karne ke liye kiya jata hai


                }
                else{
                element[value] = attributes[value];
                }
            }
            return element;
}

            // function call yaha par hota hai
const display = create('h1',{classname:'element',id:'first',style:{background:'aqua',color:'blue',textAline:'center',Fontsize:'40px'}},"hello sumanat kya kar rahe ho")
const display1 = create('h2',{classname:'element',id:'first1',style:{background:'yellow',color:'red',textAline:'center',Fontsize:'30px'}},"kuchh bhi to nahi")

           // display karne ke liye html ke div ko pakad kar display karo
document.getElementById('root').append(display)
document.getElementById('root').append(display1)