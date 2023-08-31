import { useState } from "react";
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {

const [Categories, setCategories] = useState(['One Punch']);

const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    if (Categories.includes(newCategory)) return;
      setCategories([ newCategory, ...Categories]);
      //setCategories((cat => [...cat, 'Valorant']))
};

  return (
    <>
    
    <h1>GifExpertApp</h1>
    
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory = { (event) => onAddCategory(event)  }
    />

    
      { Categories.map( category => 
        (
          <GifGrid
           key={category} 
           category={category}
           />
          
        )
      )};
    
      
    </>
  )
};
