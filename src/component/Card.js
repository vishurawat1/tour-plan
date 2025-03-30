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
        <div class="border border-indigo-600 ...">
            <img src={image} className="max-w-80" alt='tour-image'></img>
            <div className='tour-info'>
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>

                </div>
                <div className="tour-info">{description}
                    <  span className="read-more" onClick={readMoreHandler}>
                        {readMore ? "show less" : "read more"}
                    </span>
                </div>
            </div>
            

            <button className="color-red" onClick={()=>removeTour(id)}>Not Interested</button>

        </div>
    );
}

export default Card;