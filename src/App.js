import './App.css';
import {Link,BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import PricingScreen from './components/PricingScreen';
import ContactScreen from './components/ContactScreen';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab,faSkype} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare,faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fab,faSkype,faCheckSquare,faCoffee)
function App() {
  const navHandler =()=>{
    
    var x =document.getElementById("website-container")
    var y =document.getElementById("website-infos")
    if( y.className ==="website-infos" && x.className ==="website-container"){
      x.classList.add("responsive");
      y.classList.add("responsive");
    }else{
      x.classList.remove("responsive");
      y.classList.remove("responsive");
    }
    
  }
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

            
              <ul className="website-container" id="website-container">
                <li><Link to="" className="list" onClick={navHandler}>mongoDB</Link> </li>
                <li><Link to="" className="list">Cloud</Link></li>
                <li><Link to="" className="list">Software</Link></li>
                <li><Link to="/pricing" className="list">Princing</Link></li>
                <li><Link to="" className="list">Learn</Link></li>
                <li><Link to="" className="list">Solutions</Link></li>
                <li><Link to="" className="list">Docs</Link></li>
                
              </ul>
            
           
            <ul className="website-infos" id="website-infos">
                <li><input id="enter_recherche" name="enter_recherche" type="search" placeolder="Recherche"/></li>
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
      
            <div className="footer-content">       
                            <div className="footer-list">
                              <ul>
                                <li><h4>Resources</h4></li>
                                <li><Link to="" className="list">NoSQL Database Explained</Link></li>
                                <li><Link to="" className="list">MongoDB Architecture Guide</Link></li>
                                <li><Link to="" className="list">MongoDB Enterprise Advanced</Link></li>
                                <li><Link to="" className="list">MongoDB Atlas</Link></li>
                                <li><Link to="" className="list">MongoDB Realm</Link></li>
                                <li><Link to="" className="list">MongoDB Engineering Blog</Link></li>
                                <li></li>
                              </ul>
                            </div>
                            <div className="footer-list">
                              <ul>
                                <li><h4>Education & Support</h4></li>
                                <li><Link to="" className="list">View Course Catalog</Link></li>
                                <li><Link to="" className="list">Certification</Link></li>
                                <li><Link to="" className="list">MongoDB Manual</Link></li>
                                <li><Link to=""className="list">Installation</Link></li>
                                <li><Link to="" className="list">Suport</Link></li>
                                <li><Link to="" className="list">Community</Link></li>
                                <li><Link to=""className="list">FAQ</Link></li>
                              </ul>
                            </div>
                            <div className="footer-list">
                              <ul>
                                <li><h4>Popular Topics</h4></li>
                                <li><Link to="" className="list">Run MongoDB on AWS with MongoDB Atlas</Link></li>
                                <li><Link to="" className="list">Migrate to MongoDB Atlas</Link></li>
                                <li><Link to="" className="list">What is a Cloud Database?</Link></li>
                                <li><Link to="" className="list">Building a REST API with MongoDB Realm</Link></li>
                                
                                
                              </ul>
                            </div>
                            <div className="footer-list">
                              <ul>
                                <li><h4>About</h4></li>
                                <li><Link to="" className="list">MongoDB, Inc.</Link></li>
                                <li><Link to="" className="list">Leadership</Link></li>
                                <li><Link to="" className="list">Press Room</Link></li>
                                <li><Link to="" className="list">Careers</Link></li>
                                <li><Link to="" className="list">LinkedIn</Link></li>
                                <li><Link to="" className="list">Trust Center</Link></li>
                                <li><Link to="" className="list">Office Locations</Link></li>
                                <li><Link to="" className="list">Code of Conduct</Link></li>
                                <li><Link to="" className="list">Investors</Link></li>
                                <li><Link to="" className="list">Legal Notices</Link></li>
                                <li><Link to="" className="list">Privacy Notice</Link></li>
                                <li><Link to="" className="list">Security</Link></li>
                                <li><Link to="" className="list">Information</Link></li>
                                
                              </ul>
                            </div>
                            <div className="footer-list">
                              <ul>
                                <li><h4>Follow Us</h4></li>
                                <li><Link to="" className="list">Facebook</Link></li>
                                <li><Link to="" className="list">Github</Link></li>
                                <li><Link to="" className="list">Youtube</Link></li>
                                <li><Link to="" className="list">Twitter</Link></li>
                                <li><Link to="" className="list">StackOverflow</Link></li>
                                <li><Link to="" className="list">Twitch</Link></li>
                                <li></li>
                              </ul>
                            </div>
        
              </div>
              <footer className="footer">
                          <button>English</button>
                          <div>@ 2021 MongoDB, Inc.</div>
                          <p>Mongo, MongoDB, and the MongoDB leaf logo are registered trademarks of MongoDB, Inc.</p>

              </footer>
       
       </div >
    </div>
      
    
    </BrowserRouter>
  );
}

export default App;
