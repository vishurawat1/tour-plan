import Card from "./Card";



function Tours({tours, removeTour}) {
    return(
        <div >
            <div >
                <h2>Vishu Rawat</h2>
            </div>
            <div className="flex flex-wrap">
                {tours.map((tour) => {
                    return(
                        <Card key = {tour.id} {...tour} removeTour = {removeTour}/>
                    );
                })}
            </div>
            
        </div>
    );
}

export default Tours;