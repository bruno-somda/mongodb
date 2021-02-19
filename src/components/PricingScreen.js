import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import CloudScreen from './CloudScreen';
import MobileScreen from './MobileScreen';
import OnPromiseScreen from './OnPromiseScreen';

export default function PricingScreen() {
    return (<BrowserRouter>
        <div className="pricing-app">
            <div className="pricing">
                <div className="pricing-header">
                    <h1> MongoDB Pricing</h1>
                    <p>Build world-class applications for businesses of all sizes</p>
                </div>
                
                <div className="pricing-infos">
                    <div className="pricing-info">
                        <Link to="/pricing/cloud" className="list">
                            <h3>Cloud</h3>
                            <h5>Database as a service</h5>
                        </Link> 
                    </div>
                    <div className="pricing-info">
                        <Link to="/pricing/onprise" className="list">
                            <h3>On-Premise</h3>
                            <h5>In your environement</h5>
                        </Link> 
                    </div>
                    <div className="pricing-info">
                        <Link to="pricing/mobile" className="list">
                            <h3>Mobile</h3>
                            <h5>App dev service</h5>
                        </Link> 
                    </div>
                </div>
                <div>
                        <Route path="/pricing/cloud" component={CloudScreen}></Route>
                        <Route path="/pricing/onprise" component={OnPromiseScreen}></Route>
                        <Route path="/pricing/mobile" component={MobileScreen}></Route>
                </div>

            </div>
            <div className="pricing-footer">
                <div className="pricing-footer1">
                    <h2>Ready to get started?</h2>
                    <p>Launch a new cluster or migrate to MongoDB Atlas with zero downtime.</p>
                </div>
                <div className="pricing-footer2">
                    <button> Get Started</button>
                </div>
                
            </div>
        </div>
        </BrowserRouter>
    )
}
