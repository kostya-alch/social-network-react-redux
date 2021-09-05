import React from "react";
import preloader from '../../../assets/images/preloader.svg'

let Preloader = (props) => {
   return <div>
      <div style={{mixBlendMode: 'multiply'}}>
         <img src={preloader} alt={'preloader'} />
      </div>
   </div>

}

export default Preloader