import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ContactScreen() {
    return (
        
            <div className="contact-app">
                <div className="contact-header">

                                <h1> Contact Us</h1>
                                <p>We are here to help. Get in touch with sales, support or our press team and let us know how we can help.</p>
                </div>

                <div className="contact-infos">

                            <div className="contact-info">
                                
                                    <h3>Help and Support</h3>
                                    <p>Customer and community support for all your MongoDB needs</p>
                                    <h5> Get support</h5>
                                
                            </div>

                            <div className="contact-info">
                                
                                    <h3>Chat with us</h3>
                                    <p>Get in touch with our team right now </p>
                                    <h5>Start a chat</h5>
                                
                            </div>
                            <div className="contact-info">
                                
                                    <h3>Press and Media</h3>
                                    <p>Contact the press team and access media resources</p>
                                    <h5> Visit the press room</h5>
                                
                            </div>


                </div>
                <div className="people-infos">
                        <div className="people-info">
                            <h1>Have a general question?</h1>
                            <p>Fill out this form or give us a call to speak with a member of our team.</p>
                            <form>
                                <div className="people">
                                    <input type="text" placeborder="Your Work Email"/>
                                </div>
                                
                                <div className="people-name">
                                    <input type="text" placeborder="First Name"/><input placeborder="Last Name"/>
                                </div>
                                <div className="people">
                                    <input type="text" placeborder="Company"/>
                                </div>
                                <div className="people">
                                    <input placeborder="Business Phone" type="text"/>
                                </div>
                                <div className="people">
                                    <select placeborder="Select Job functions">
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                        <option>Architect</option>
                                    </select>
                                </div>
                                <div className="people">
                                    <select placeborder="What Can We Help You With ">
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                    <option>Cloud Manager</option>
                                </select>
                                </div>
                                <div className="people">
                                    <textarea placeborder="Tell us more about how we can help with"> </textarea>
                                </div>
                                <div className="people">
                                    <button type="submit"> Submit</button>
                                </div>
                                
                            </form>
                        </div>


                        <div>
                            <table className="table">
                                <thead>
                                    <tr> 
                                        <th className="black">Country/Region</th>
                                        <th>Phone Number</th>
                                    </tr>
                                
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="black">United States</td>
                                        <td>+1 844-666-4632</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Europe, the Middle East, and Africa</td>
                                        <td>+44 845 564 3554</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Australia & New Zealand</td>
                                        <td>+61 1300 103 899</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Asia Pacific</td>
                                        <td>+61 1300 103 899</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Argentina</td>
                                        <td>+54 11 5984 2203</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Brazil</td>
                                        <td>+55 21 3500 0460</td>
                                    </tr>
                                    <tr>
                                        <td className="black">China</td>
                                        <td>+86 10 57372589</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Colombia</td>
                                        <td >+57 150 867 87</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Mexico</td>
                                        <td>+52 55 4162 9117</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Peru</td>
                                        <td>+51 1 7061 827</td>
                                    </tr>
                                    <tr>
                                        <td className="black">Taiwan, China</td>
                                        <td>+886 (02)8729 1148</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>

            </div>
        
    )
}
