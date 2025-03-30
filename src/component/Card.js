import React, {useState} from 'react';


function Card({id, name, info, image, price, removeTour}) {
    const [readMore, setReadMore] = useState(false);

    let description = readMore ? info: `${info.substring(0, 200)}...     `;
    if(info.length <= 200){
        description = info;
    }

    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} className="image" alt='tour-image'></img>
            <div className='tour-info'>
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>

                </div>
                <div className="description">{description}
                    <  span className="read-more" onClick={readMoreHandler}>
                        {readMore ? "show less" : "read more"}
                    </span>
                </div>
            </div>
            

            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>

        </div>
    );
}

export default Card;