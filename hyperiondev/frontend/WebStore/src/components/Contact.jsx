// Contact
// route to /Contact
// Dru Delarosa | @dntstck

import NavBar from "../routes/NavBar";
import ContactCard from "./ContactCard";
import TotalPrice from "./TotalPrice";
import { useTotalPrice } from "./TotalPriceContext";

export default function Contact({ }) {
  const { totalPrice } = useTotalPrice(); 
  return (
    <div className="center-app">
      <NavBar />
      <TotalPrice total={totalPrice} />
      <ContactCard />
    </div>
  );
}
