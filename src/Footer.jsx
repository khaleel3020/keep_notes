import React from 'react';
const Footer =()=>{

const year=new Date().getFullYear();

    return(<>
  
    <div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
      <p>copyright  © {year} </p>
      </div>     
    </div>
</div>


    </>)
}
export default Footer;