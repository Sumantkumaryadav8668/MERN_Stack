
const React={    // React Library
    create: function(tag,attributes,children){
    
        const element = document.createElement(tag);
        element.textContent = children;
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
}

 const ReactDOM ={   // ReactDOM Library 
    render : function(child,parent){
        parent.append(child);
    }
}


            // function call yaha par hota hai
const display = React.create('h1',{className:'element',id:'first',style:{background:'aqua',color:'blue',textAlign:'center',Fontsize:'40px'}},"hello sumanat kya kar rahe ho")
const display1 = React.create('h2',{className:'element',id:'first1',style:{background:'yellow',color:'red',textAlign:'center',Fontsize:'30px'}},"kuchh bhi to nahi")

           // display karne ke liye html ke div ko pakad kar display karo
// document.getElementById('root').append(display)
// document.getElementById('root').append(display1)

ReactDOM.render(display,root);
ReactDOM.render(display1,root);
 