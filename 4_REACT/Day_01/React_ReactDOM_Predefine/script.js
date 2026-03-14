
     // Create element using React  old verson

     // child
// const element = React.createElement('h1',{className:'element',id:'first'},'Hello sir, How are you ?')
//          // parent
// const root = document.getElementById('root');
//           // for display in html page
// ReactDOM.render(element,root);


           // verson 19

       //  child
const element = React.createElement('h1',{className:'element',id:'first'},'Hello sir, How are you ?')
         // parent
// const root = document.getElementById('root');   

          // for display in html page

const main1 = ReactDOM.createRoot(document.getElementById('root')); 
console.log(main1)  
main1.render(element)       