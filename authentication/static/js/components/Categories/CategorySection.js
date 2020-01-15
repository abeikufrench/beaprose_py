import React from "react";
import CategoryHeader from "./CategoryHeader";
import CategoryText from "./CategoryText";

function CategorySection(props) {
    return (
        props.categorySection.map((category) => (
            <div>
                <CategoryHeader 
                    image={category.image}
                    title={category.title}
                    alt={category.alt}
                />
                {category.categories.map((title) => (
                    <CategoryText text={title}/>
                ))}
            </div>
        ))
    )
}

export default CategorySection;