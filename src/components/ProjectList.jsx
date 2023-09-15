
import { useState } from "react";
export const ProjectList = (props) => {
    const category_l = props.category;
    const projects = props.projects;

    let index = 0;
    
    return (
      <>
      {  
        category_l.filter(category => projects==category.category||projects=="All").map(val =>
          <div key={index++} style={{float:'left',padding:'5px'}} className={val.category}> 
    <img src={val.img} /> 
    </div>
          )
      }
      </>
  )
}
