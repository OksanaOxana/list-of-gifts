import './App.css';
import { useState } from 'react';
import { data } from './data'

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let NewGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(NewGifts)
  }
  return (
    <div>
      <div className='container'>
        <h1>List of <span>{gifts.length}</span> gifts</h1>
      </div>
      {gifts.map((item => {
        const {id, gift, image} = item;
        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} {gift}</h2>
            </div>
            <div className='container'>
              <img src={image} width="300px" height="250px" />
            </div>
            <div className='container'>
              <button  onClick={() => removeGift(id)}>Remove</button>
            </div>
          </div>
        )
      }))}
      <div className='container'>
        <button className='btn' onClick={() => setGifts([])}>DELETE ALL</button>
    </div>
    </div>
  );
}

export default App;
