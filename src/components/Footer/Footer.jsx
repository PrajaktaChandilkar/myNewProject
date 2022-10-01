import React from "react";
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="company-info">
                    <ul>
                        <li><h5>Compony Info</h5></li>
                        <li><a href="About Us">About Us</a></li>
                        <li> <a href="carrier">Carrier</a> </li>
                        <li><a href="hiring">We are hiring</a></li>
                        <li><a href="blog">Blog</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <ul>
                        <li><h5>Legal</h5></li>
                        <li><a href="About Us">About Us</a></li>
                        <li> <a href="carrier">Carrier</a> </li>
                        <li><a href="hiring">We are hiring</a></li>
                        <li><a href="blog">Blog</a></li>
                    </ul>
                </div>
                <div className="feature">
                    <ul>
                        <li><h5>Features</h5></li>
                        <li><a href="marketing">Business Marketing</a></li>
                        <li><a href="user-analysis">User Analysis</a></li>
                        <li><a href="live-chat">Live Chat</a></li>
                        <li><a href="support">Unlimited Suport</a></li>
                    </ul>
                </div>
                <div className="resources">
                    <ul>
                        <li><h5>Resources</h5></li>
                        <li><a href="IOS and Android"></a></li>
                        <li><a href="demmo">Watch a Demo</a></li>
                        <li><a href="customer">Customer</a></li>
                        <li><a href="api">API</a></li>
                    </ul>
                </div>
                <div className="get-in-touch">
                    <ul>
                        <li><h5>Get in Touch</h5></li>
                        <li>
                            <div className="subscribe">
                                <input type="email" name="email" id="email" placeholder="Enter email" />
                                <button>Subscribe</button>
                            </div>

                        </li>
                        <li>lorem ispan</li>
                    </ul>
                </div>
            </div>
            <div className="gratitude">
                <h6>Made With ❤️ at Acciojob</h6>
            </div>
        </footer>
    )
}

export default Footer