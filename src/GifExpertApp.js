import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['kakegurui', 'dead note','parasyte'];
  const [categories, setCategories] = useState(["Death Note"]);

  // // const handleApp = () =>{
  // // setCategories ([...categories , 'Tokyo Ghoul'])

  // }

  return (
    <>
      <h2> GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category=> 
        <GifGrid 
        key={category}
        category ={category}/>
        )}
      </ol>
    </>
  );
};
export default GifExpertApp;
