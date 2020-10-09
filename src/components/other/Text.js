import React from 'react';
import './Text.scss';


const Text = ({ children }) => {

    return(
        
<div class="skin purple">
<div class="hero-arrow">
  <div class="skin-wrapper">
    <hr />
{children}
<hr />
  
  </div>
  </div>
</div>
    )
}

export default Text;