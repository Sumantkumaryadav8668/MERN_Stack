
import { createRoot } from 'react-dom/client'
import App from './app.jsx'  // export default import
import {Sumant,Kumar} from  './app.jsx'    // Name esport import

createRoot(document.getElementById('root')).render(
//  <h1>Hello Sumant kumar kaise hai app</h1>
 <>
<App></App>
<Sumant></Sumant>
<Kumar></Kumar>
 </>
)
