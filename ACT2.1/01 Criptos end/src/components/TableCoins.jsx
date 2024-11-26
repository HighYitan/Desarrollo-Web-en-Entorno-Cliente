import CoinRow from "./CoinRow.jsx"

export default function TableCoins({dataCoins, searchInput}){
  const titles = ["#","Coin","Price","Price Change","24h Volume"];

  if(!dataCoins) return <div>no coins</div>

  const filteredCoins = dataCoins.filter(coin =>
    coin.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return(
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, index) => <td key={index}>{title}</td>)}
        </tr>
       </thead>        	
      <tbody>
        {filteredCoins.map((coin, index) =>
         <CoinRow key={coin.id} coin={coin} index={index+1}/>
        )}
      </tbody>
    </table>
  )
}
