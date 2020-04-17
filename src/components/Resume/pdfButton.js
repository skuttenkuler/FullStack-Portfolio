import React from 'react';
import PDF from './SamKuttenkuler_Resume.pdf'

export default function Resume() {
    return(
       <div className="resume main-nav--header">
           <a href={PDF}>Resume</a>
       </div>
    )
}