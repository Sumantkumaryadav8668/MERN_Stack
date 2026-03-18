         // create an Array
const course = ['HTML','CSS','JS','REACT']

const element =(
   <ul>
        {/* // map using in array  */}
        {course.map(ans=><li>{ans}</li>)}
   </ul> 
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element);