import React from 'react'
import Footer from '../components/footer/Footer'
import Icon from '../components/icons'

import "./Footer.scss";


export function FooterContainer() {
    return (
        // <!-- Site footer -->
       <footer>

       <div className="footer flexbox-container">
       <div className="flexbox-item flexbox-item-1">
<h3 class="widget-title">Abaut Us<span></span></h3>
  <p>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
</div>  

<div className="flexbox-item flexbox-item-2 pb5">
<h3 class="widget-title">Services<span></span></h3>
  <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
</div>   

<div className="flexbox-item flexbox-item-3">
<h3 class="widget-title">Contact Us<span></span></h3>

  <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
            
</div>

       </div>
       <div className="social-container">
    <h2>Follow us on</h2>

       <div class="footer-social-icons">
    <ul class="social-icons">
        <li><a href="" class="social-icon"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="" class="social-icon"><i class="fab fa-twitter"></i></a></li>
        <li><a href="" class="social-icon"><i class="fab fa-youtube"></i></a></li>
        <li><a href="" class="social-icon"><i class="fab fa-instagram"></i></a></li>
    </ul>
</div>
       </div>
       <div class="col-md-12 text-center">
<p>Copyright Company Name © 2016. All rights reserved.</p>
</div>
    </footer>
      
    )
}