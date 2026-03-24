import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import TechnicalLab from './components/TechnicalLab';
import Sustainability from './components/Sustainability';
import Showcase from './components/Showcase';
import Inquiry from './components/Inquiry';
import Logistics from './components/Logistics';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <TechnicalLab/>
      <Sustainability/>
      <Showcase/>
      <Logistics/>
      <Inquiry/>
      <Footer/>
      {/* You can add Footer and Why Choose Us here later */}
    </main>
  );
}