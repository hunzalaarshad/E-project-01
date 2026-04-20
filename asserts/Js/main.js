let footer = document.getElementById("footer");
let nav = document.getElementById("nav");

nav.innerHTML = ` <div class="nav-container w">
            <div class="mob">
                <div class="logo">
                    <img src="../asserts/images/logo.webp" alt="logo" loading="eager" width="38">
                    <span>Safe Carz Limited</span>
                </div>
                <i class="fa-solid fa-bars hamberger"></i>

            </div>

            <div class="navigation">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="plans.html">Plans</a></li>
                    <li><a href="companies.html">Companies</a></li>
                    <li><a href="vehicles.html">Vehicles</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>`;

footer.innerHTML = `<div class="container-footer w">
            <div class="footer-f-row">
                <div>
                    <div class="logo">
                        <img src="../asserts/images/logo.webp" alt="logo" loading="eager" width="38">
                        <span>Safe Carz Limited</span>
                    </div>
                    <p>Your trusted partner for comprehensive vehicle insurance solutions. Protecting your journey,
                        every mile of the way.</p>
                    <ul>
                        <li><i class="fa-regular fa-envelope"></i> info@safecarz.com</li>
                        <li><i class="fa-solid fa-phone"></i> +92 21 1234 5678</li>
                        <li><i class="fa-solid fa-location-dot"></i> Karachi, Pakistan</li>
                    </ul>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Insurance Plans</li>
                        <li>Our Partners</li>
                        <li>Vehicle Categories</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h2>Services</h2>
                    <ul>
                        <li>Four Wheeler Insurance</li>
                        <li>Two Wheeler Insurance</li>
                        <li>Claim Assistance</li>
                        <li>Policy Renewal</li>

                    </ul>
                </div>
            </div>
            <div class="footer-copy-right">
                <p>&copy 2026 Safe Carz Limited. All rights reserved.</p>
            </div>

        </div>`;