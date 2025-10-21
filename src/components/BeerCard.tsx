
export type BeerType = {
    image: string;
    name: string;
    abv : string;
    volume : string;
    price: number;
    available : boolean;
}

const BeerCard = (props : BeerType) => {
  return (
    <div className='beerCard'>
       <img src={props.image}/>
       <strong>{props.name} {props.abv} {props.volume}</strong>
       <span>{props.price}Ft</span>
       
       

    </div>
   
  )
}

export default BeerCard