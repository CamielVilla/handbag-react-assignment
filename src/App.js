import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
            <Button
            message="to the collection"
            disabled={false}
            />
            <Button
                message="shop all the bags"
                disabled={false}
            />
            <Button
                message="pre-orders"
                disabled={true}
            />
        </nav>
        <main>
            <Product
                label="best seller"
                image={bag1}
                title="The handy bag"
                price="€400"
            />
            <Product
                label="best seller"
                image={bag2}
                title="The stylish bag"
                price="€250"
            />
            <Product
                label="New Collection"
                image={bag3}
                title="The simple bag"
                price="€300"
            />
            <Product
                label="New collection"
                image={bag4}
                title="The trendy bag"
                price="€150"
            />
        </main>
          <footer>
                  <Tile
                      content="text"
                      title="brand"
                      >
                     <p>Lurom ipsum</p>
                    </Tile>
              <Tile
                  content="image"
                  title="brand"
                  image={brand}
                  />
              <Tile
                  content="image"
                  title="our story"
                  image={ourStory}
              />
              <Tile
                  content="text"
                  title="our story"
              >
                  <p>Lurom ipsum</p>
              </Tile>
          </footer>
      </>
  );
}

export default App;



