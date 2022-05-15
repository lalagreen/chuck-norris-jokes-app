import React from 'react';
import { CategoryJokeList } from './CategoryJokeList'
import './CategoryJoke.css'

export function CategoryJoke({categories, onButtonClick}) {

    return (
        <>
            <div className="categories-card">
                <p className="category-title">Categories</p>
                {
                categories.map((cat) =>
                    <CategoryJokeList item={cat.value} onButtonClick={onButtonClick} />
                )}
            </div>
        </>
    )
}


