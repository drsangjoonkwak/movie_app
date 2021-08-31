import React from "react";

function Food({ fav }) {
  return <h1>I Love {fav}</h1>;
}

const foodILike = [
  {
    name: "Kimchi", 
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png"
  },
  {
    name: "Kimbab",
    image: "https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M.jpg"
  },
  {
    name: "Pizza",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/15/9c/11/a4/pizza.jpg"
  },
  {
    name: "fish",
    image: "https://articlewatt.com/wp-content/uploads/2021/05/Scup-porgy.jpg"
  }
]

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {foodILike.map(dish => <Food name={dish.name} />)}
    </div>
  );
}

export default App;
