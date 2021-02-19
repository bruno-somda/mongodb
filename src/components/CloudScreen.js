import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function CloudScreen() {
    return (
            <div className="cloud-app">
                <div className="cloud">
                    <div className="cloud-header">
                        <h1> MongoDB Atlas</h1>
                        <p>Fully managed, global multi-cloud database on AWS,Asure and Google Cloud</p>
                        <div className="cloud-h">
                        <h3>Recommended</h3>
                        </div>

                    </div>
                    
                    <div className="cloud-infos">
                        <div className="cloud-shared">
                            <div className="cloud-elements">
                                    <h1>Shared</h1>
                                    <h5>from $0/mo*</h5>
                                    <button>Try for Free</button>
                                    <p>*Free forever M0 cluster</p>
                                
                            </div>
                            
                            <div className="cloud-elements2">
                                    <h3>For learning MongoDB or developing small applications</h3>
                                    <ul>
                                        <li>512MB to 5GB of storage</li>
                                        <li>Shared RAM</li>
                                        <li>End-to-end encryption</li>
                                        <li>Built-in GUI for exploring and manipulating data</li>
                                    </ul>
                                    <Link to="" className="pricing-view">View pricing</Link>
                                    
                                
                            </div>
                        </div>
                        <div className="cloud-dedicated">
                            
                            
                            <div className="cloud-recommend">
                                    <h1>Dedicated</h1>
                                    <h5>from $57/mo*</h5>
                                    <button>Sign Up</button>
                                    <p>*Estimate based on $0.08/hr</p>
                                
                            </div>
                            
                            <div className="cloud-recommend2">
                                    <h3>For applications that need advanced, production-ready environments</h3>
                                    <ul>
                                        <li>10GB to 4TB of storage</li>
                                        <li>2GB to 768GB RAM</li>
                                        <li>Elastic scalability and auto-scaling</li>
                                        <li>Point-in-time data recovery</li>
                                    </ul>
                                    <Link to="" className="pricing-view">View pricing</Link>
                                    
                                
                            </div>
                        </div>
                        <div className="cloud-multi-Region">
                            
                            
                            <div className="cloud-Region">
                                    <h1>Multi-Region</h1>
                                    <h5>from $95/mo*</h5>
                                    <button>Sign Up</button>
                                    <p>*Estimate based on $0.13/hr</p>
                                
                            </div>
                            
                            <div className="cloud-Region2">
                                    <h3>For higher resiliency,ultra-low latency,and data residency requirements</h3>
                                    <ul>
                                        <li>Cross-region replication</li>
                                        <li>Geo-partitioned data storage</li>
                                        <li>Multi-cloud clusters</li>
                                        
                                    </ul>
                                    <Link to="" className="pricing-view">View pricing</Link>
                                    
                                
                            </div>
                        </div>
                    
                    </div>
                    
                

                </div>
                <div className="select">
                    <label>View plan comparison</label>
                    <select>
                        <option ></option>
                        <option >1</option>
                        <option >2</option>
                        <option >3</option>
                        <option >4</option>
                        <option >5</option>
                        <option >6</option>
                    </select>
                </div>
                <div className="about">
                    <div className="info1">
                        <h3>Questions about pricing?</h3>
                        <p>Talk to us for more about information features,sizing,plans and consulting.</p>
                    </div>
                    <div className="info2">
                        <button> Contact Us</button>
                    </div>
                
                </div>
                
                <div className=""></div>
                <div className="tool">
                    <div className="tool-header">
                        <h2> Customize your deployment with tools and services</h2>
                        

                    </div>
                    
                    <div className="tool-infos">
                        <div className="tool-shared">
                            
                                    <h4>Atlas Data Lake</h4>
                                    
                                    <p>Query and analyse data accros AWS S3 and MongoDB Atlas in-place</p>
                                    <Link to="" className="pricing-view link">Learn more</Link>
                            
                            
                            
                        </div>
                        <div className="tool-dedicated">
                            
                            
                            <div className="tool-recommend">
                                    <h4>Charts</h4>
                                    
                                    <p>Connect to any MongoDB instance as a data source create charts and graphs</p>
                                    <Link to="" className="pricing-view link">Learn more</Link>
                                
                            </div>
                            
                            
                            
                        </div>
                        <div className="tool-multi-Region">
                            
                            
                            <h4>Bi connector</h4>
                                    
                            <p>Use as a data source for your business inteligence and visualization platforms</p>
                            <Link to="" className="pricing-view link">Learn more</Link>
                                
                            
                           
                        </div>
                        <div className="tool-multi-Region">
                            
                            
                            <h4>Online archive</h4>
                                    
                            <p>Reduce costs while preserving easy access to historic data</p>
                            <Link to="" className="pricing-view">Learn more</Link>
                                      
                            
                           
                        </div>
                    
                    </div>
                    
                

                </div>
            
        </div>
       
    )
}
