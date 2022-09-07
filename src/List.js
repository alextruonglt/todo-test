import React from "react"

const List = ({items}) => {



const itemsEl = items.map((item) =>{
    const {title, id} = item
    return(
        <div key={id}>
            <p>{title}</p>
        </div>
    )
})

return (
    <div>
        {itemsEl}
    </div>
)

}

export default List