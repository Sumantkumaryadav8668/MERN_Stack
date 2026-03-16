
       // React Build syntax:-
const React = {
    createElement: function(type,props,children){
        return{
            type:type,
            props:{
                ...props,
                children:children
            }
        }
    }
    
}   

    // Creat React Element

// const reactElement={
//     type:'h1',
//     propes:{
//         className:'element',
//         id:"first",
//         style:{
//             backgroundColor:"aqua",
//             color:"blue",
//             texttContent:'center'
//         },
//         children:'Hello sumant kaise hai aap'
//     }
// }    

const ReactDOM={
    render: function(reactElement,root){
        const element = document.createElement(reactElement.type)

        const {props} =reactElement
        for(const key in props){
            if(key==='style'){
                Object.assign(element.style,props.style)
            }
            else if(key==='children'){
                element.textContent=props[key]
            }
            else element[key]=props[key]

        }
        root.append(element)
    }
}

const element1 = React.createElement('h1',{className:'element',id:'first'},'Hello sir, How are you ?')

// const root = document.getElementById("root");
ReactDOM.render(element1,document.getElementById("root"))

