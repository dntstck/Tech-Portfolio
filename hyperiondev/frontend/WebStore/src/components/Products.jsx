// Products
// route to /Products
// Dru Delarosa | @dntstck

import React, { useState } from "react";
import NavBar from "../routes/NavBar";
import ProductCard from "./ProductCard";
import TotalPrice from "./TotalPrice";
import teaKettle from '/tea-kettle.svg';
import groundCoffee from '/ground-coffee.svg';
import coffeeWarmer from '/coffee-warmer.svg';
import coffeePerc from '/coffee-perc.svg';
import coffeeMug from '/coffee-mug.svg';
import coffeeMachine from '/coffee-machine.svg';
import coffeeKettle from '/coffee-kettle.svg';
import coffeeCup from '/coffee-cup-single.svg';
import coffeeBeans from '/coffee-beans.svg';
import coffeeBag from '/coffee-bean-bag.svg';
import './Products.css';
import { useTotalPrice } from "./TotalPriceContext";

const item = [
  { name: 'Custom Tea Kettle', desc: 'Our Custom Tea Kettle, for a quali-tea brew.', price: 50, logo: teaKettle, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Ground Coffee', desc: 'Our own Home Slow Roasted , freshly ground coffee beans.', price: 15, logo: groundCoffee, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Warmer', desc: 'Keep your favourite brews warm.', price: 30, logo: coffeeWarmer, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Smoothie Machine', desc: 'Craft your own smoothies with our branded smoothie machine.', price: 300, logo: coffeePerc, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Mug', desc: 'Keep your favourite brews warm.', price: 30, logo: coffeeMug, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Machine', desc: 'Blend and craft your own artisan brews at home.', price: 3000, logo: coffeeMachine, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Perculator', desc: 'Craft your own artisanal brews with our glass perculator.', price: 30, logo: coffeeKettle, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Cup', desc: 'Our custom branded mug.', price: 30, logo: coffeeCup, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Beans', desc: 'Our Home Slow Roasted Beans.', price: 25, logo: coffeeBeans, colors: ["Black ", "Silver ", "Platinum "] },
  { name: 'Coffee Bean Sack', desc: 'Home Slow Roasted Beans... in a 25kg sack!', price: 250, logo: coffeeBag, colors: ["Black ", "Silver ", "Platinum "] },
];

export default function Products() { 
  const { totalPrice, handleBuy } = useTotalPrice();

  return (
    <>
      <div className="center-app">
        <NavBar />
      </div>
      <TotalPrice total={totalPrice} />
      <div className="product-grid">
        {item.map((product, index) => (
          <ProductCard 
            key={index}
            name={product.name} 
            desc={product.desc} 
            price={product.price} 
            logo={product.logo}
            colors={product.colors}
            onBuy={handleBuy} 
          />
        ))}
      </div>
    </>
  );
}

