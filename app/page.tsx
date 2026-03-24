import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import TechnicalLab from './components/TechnicalLab';
import Sustainability from './components/Sustainability';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <TechnicalLab/>
      <Sustainability/>
      <Footer/>
      {/* You can add Footer and Why Choose Us here later */}
    </main>
  );
}