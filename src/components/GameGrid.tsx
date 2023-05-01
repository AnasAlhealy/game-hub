import React, { useEffect, useState } from 'react'
import apiClint from '../services/api-clint';
    
    interface Game{
        id: number;
        name:string;
    }

    interface fetchGameResponse{
        count:number;
        results:Game[]
    }

const GameGrid = () => {

   const [games, setGames] = useState<Game[]>([]);
   const [error, setError] = useState('');

    useEffect(() => {
       apiClint.get<fetchGameResponse>('/games')
        .then(res => setGames(res.data.results)) 
        .catch(err => setError(err.message))
    })

  return (
    <>
    {error &&<text>{error}</text>}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid