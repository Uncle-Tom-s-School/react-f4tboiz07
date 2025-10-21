import { useEffect,useState } from "react"
import BeerCard, {type BeerType } from "./components/BeerCard"
const App = () => {

  const[data, setData] = useState<BeerType[]>([])


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className="beerCardWrapper">
      {data.map(item=><BeerCard {...item}/>)}

    </div>
  )
}

export default App