import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    const onAddCategory = (element) => {
        if (categories.includes(element)) return;
        setCategories([element, ...categories])
        // setCategories(cat=>[...cat, element])

    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategories={onAddCategory} currentCategories={categories} />

            {
                categories.length > 0
                    ? (
                        categories.map(category => (
                            <GifGrid key={category} category={category} />
                        ))
                    )
                    : (<h3>Aun no hay GIFs, ¡busca tus favoritos!</h3>)
            }


        </>
    )
};
