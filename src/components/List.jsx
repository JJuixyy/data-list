import React from "react";

const List = ({ comment }) => {
    return (
    <>
        {comment.map((eleve) => {
            const  {id, name, age, comment} = eleve; 
        return (
            <div className="container">
                <div className="element" key={id}>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{comment}</p>
                </div>
            </div>
        );
        })}
    </>
    )
};

export default List;
