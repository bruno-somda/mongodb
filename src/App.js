import './App.css';
import {Link,BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import PricingScreen from './components/PricingScreen';
import ContactScreen from './components/ContactScreen';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare,faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fab,faCheckSquare,faCoffee)
function App() {
  return (<BrowserRouter >
    <div className="App">
      
        <div className="App-header">

          <header className="header">
            <ul >
                  <li><Link to="" className="list"><h4>MONGODB ATLAS PRESENTS</h4></Link></li>
                  <li><Link to="" className="list"><h3>DAY ZERO</h3></Link></li>
                  <li><Link to="" className="list"><h4>AN INTERACTIVE THRILLER</h4></Link></li>
                  <li><Link to="" className="list"><h4>WATCH NOW</h4></Link></li>
                  
                  
              </ul>
          </header>

          <nav>

            
              <ul className="website-container">
                <li><Link to="" className="list">mongoDB</Link></li>
                <li><Link to="" className="list">Cloud</Link></li>
                <li><Link to="" className="list">Software</Link></li>
                <li><Link to="/pricing" className="list">Princing</Link></li>
                <li><Link to="" className="list">Learn</Link></li>
                <li><Link to="" className="list">Solutions</Link></li>
                <li><Link to="" className="list">Docs</Link></li>
                <li><FontAwesomeIcon  icon="coffee"/></li>
              </ul>
            
           
            <ul className="website-infos">
                <li><input id="enter_recherche" name="enter_recherche" placeolder="Recherche"/></li>
                <li><Link to="/contact" className="list">Contact</Link></li>
                <li><Link to="" className="list">Sign In</Link></li>
                <li> <button>Try Free</button></li>
               
            </ul>
            

          </nav>
       </div>
       <div className="elements-content">
       <Route path="/pricing" component={PricingScreen}></Route>
       <Route path="/contact" component={ContactScreen}></Route>
       </div>
       <div className="footer-table">
      
       
      
        <table >
          <thead className="line" >
            <tr>
                <th><h4>Resources</h4></th>
                <th><h4>Education & Support</h4></th>
                <th><h4>Popular Topics</h4></th>
                <th><h4>About</h4></th>
                <th><h4>Follow Us</h4></th>
                
            </tr>
          </thead>
          <tbody className="line">
            <tr>
              <td><Link to="" className="list">NoSQL Database Explained</Link></td>
              <td><Link to="" className="list">View Course Catalog</Link></td>
              <td><Link to="" className="list">Run MongoDB on AWS with MongoDB Atlas</Link></td>
              <td><Link to="" className="list">MongoDB, Inc.</Link></td>
              <td><Link to="" className="list">Facebook</Link></td>
                  
            </tr>
            <tr>
                
              <td><Link to="" className="list">MongoDB Architecture Guide</Link></td>
              <td><Link to="" className="list">Certification</Link></td>
              <td><Link to="" className="list">Migrate to MongoDB Atlas</Link></td>
              <td><Link to="" className="list">Leadership</Link></td>
              <td><Link to="" className="list">Github</Link></td>

            </tr>
          
            <tr>
                
              <td><Link to="" className="list">MongoDB Enterprise Advanced</Link></td>
              <td><Link to="" className="list">MongoDB Manual</Link></td>
              <td><Link to="" className="list">What is a Cloud Database?</Link></td>
              <td><Link to="" className="list">Press Room</Link></td>
              <td><Link to="" className="list">Youtube</Link></td>

            </tr>
            <tr>
              <td><Link to="" className="list">MongoDB Atlas</Link></td>
              <td><Link to=""className="list">Installation</Link></td>
              <td><Link to="" className="list">Building a REST API with MongoDB Realm</Link></td>
              <td><Link to="" className="list">Careers</Link></td>
              <td><Link to="" className="list">Twitter</Link></td>
               
            </tr>
        
            <tr>
              <td><Link to="" className="list">MongoDB Realm</Link></td>
              <td><Link to="" className="list">Suport</Link></td>
              <td><Link to="" className="list">Investors</Link></td>
              <td><Link to="" className="list">LinkedIn</Link></td>
                
            </tr>
            <tr>
              <td><Link to="" className="list">MongoDB Engineering Blog</Link></td>
              <td><Link to="" className="list">Community</Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Legal Notices</Link></td>
              <td><Link to="" className="list">StackOverflow</Link></td>
    
            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to=""className="list">FAQ</Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Privacy Notice</Link></td>
              <td><Link to="" className="list">Twitch</Link></td>
                
            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Security</Link></td>
              <td><Link to="" className="list"></Link></td>
            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Information</Link></td>
              <td><Link to="" className="list"></Link></td>

            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Trust Center</Link></td>
              <td><Link to="" className="list"></Link></td>
                
            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Office Locations</Link></td>
              <td><Link to="" className="list"></Link></td>
                
            </tr>
            <tr>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list"></Link></td>
              <td><Link to="" className="list">Code of Conduct</Link></td>
              <td><Link to="" className="list"></Link></td>

            </tr>
            
          </tbody>
       </table>
        
       
       <footer>
              <h3>English</h3>
              <div>2021 MongoDB, Inc.</div>
              <p>Mongo, MongoDB, and the MongoDB leaf logo are registered trademarks of MongoDB, Inc.</p>

        </footer>
       
       </div >
    </div>
    </BrowserRouter>
  );
}

export default App;
