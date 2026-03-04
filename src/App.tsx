import React from 'react';
import { 
  Coffee, 
  Leaf, 
  Laptop, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Menu as MenuIcon,
  X,
  Utensils,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA } from './data/menu';

const IMAGES = {
  logo: "https://placehold.co/400x400/000000/FFFFFF?text=Demitasse+Coffee", // Placeholder for user-provided logo
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1kRUZNLzZZPKgYsBiEE1uzCDV3P8u4Uy2OvgYBYjjMMCrlX9_1Mo2aK2z4ieozSN8wRqsWX3TmO9zKFzQkgzGkhvcGPYrQ4fEiD5g2hR8NS-dXspfJaI8Uf5y9SOV0ggfdzyfY-GJtEY2tMMkxJpNg1WoqaKSsnNsURH8RM2DIMQYQhN9epv3VUyiQ1gl3SWHQWl3Mxa6WQe8zElvk9uw7VbLVfYNaY1C-wmAKjJtrl5mIRixOuEO3bTrgqV50ThKMUBlyWPurpw",
  about1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDto73jfcOPXc1FbjXVxAzA4IdkHVbcBMMH_q8WkSO9raIiprsrV2JrGQztR_EhgEw6Pfd5_HL0qJKYt34XsDSxOj3adeobYAW09LQTvH_qGih_l-6MpFWnV34Mg_6G5yjnwO0pjcYYfCmysinI5GUwFCE0MuyFonbFieq-iTly_HoQrPufC_0D5ZxtLNW2G0p8CNN310q6oyxdrhl-Gt1En1Yov5N7UaT-GxaMVrtgIdW4VekhHslW1YtjDiTVlyG8UUYS9_rIwpw",
  barista: "https://lh3.googleusercontent.com/aida-public/AB6AXuCASOLwvzhU_srq2M5bUy6SQhwSVc-69lGp_peKHR8s8QsAAAwIq6onHCRAExINlw_hl_rzUPWb_RImExSBHQqa5Apy0wN3pFGhx7K5s7h2Cd6Kot03x6Vwbch3AAxxQYYiAFloip26R-WhdrbJQw_xk6C1HXzb4zN8cWJuepBLRyadgv_yKlU1A2c6Yfqzl6aoBhJZSRy3-I5LIuDZNYZmXPV3NAqQHHHOeWv5U01B5WyXJ1lTisyfjtQAg4onEFp50AXQO14aPos",
  highlights: [
    {
      name: "Java Chip Frappe",
      desc: "Bold espresso & java chips topped with whipped cream.",
      price: "₹249",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX6girhMfxFHt4ql0vP4H6Whmz0iDqgZfcx63E3RTNtu9SAsIBHdGZAGkGngdEoLM9YoCcflrOkHH9arbguJPmVWQuanCbmnKQZzGOXWLJS8OM9nnf9HtuGAECAZyfNwPg1YZY9iMADRzTMzvL3jYHy899a5pPGj7CmT1C9AhcxcoFf4kMXyIzJmg6JZGSUzm4BSwBbSdqZFVmggEHOieucK7RRH4jABbAXUSFoUzQjLVUroLJ95owtiGpq_yMgF3NJftdqc9vAcg",
      bestseller: true
    },
    {
      name: "Club Chicken Sandwich",
      desc: "Classic layers of chicken, fried egg, and cheese.",
      price: "₹280",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHcI8M7rRa1s3a5U1m6mn_kyCt7AhmbgZOVJILZ2TNmTntoj0fZ5GUJczis5oaDhOo3R_V_22aPjEZZDn5VYejQJzOM7AidhnvwkHQbDeuCC269zKEcaSv4lZXoyohELWdLVDxjnaCBYNK9pTgVkRbNatdR7prhi7_XCTG15LJaR80zzMef7GTpAmqqvS-rxfCNoqQozYpattfr3RDxmEGBa3likEpzCzuqIw7LmoUOdjgDRUp09FlxJlN1omqe7l52g0APaFfTDE",
      bestseller: true
    },
    {
      name: "Katsu Curry Chicken",
      desc: "Crispy chicken with Japanese curry and fluffy rice.",
      price: "₹350",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDagKb-Kre-G1baTxExevn9GVbrUS7QJJqaUpijx17-10e-sXrNUnuH_OK8tLD4D4WBmRCWHUo-_kATLyCTv2O04tUoByv4jRlNMttx8CcR3w3MzYa7_WvNraxe6jwGVZHqzK12MhWWUX7hBJaNulDS6azvF79ZHnfrUDYeMiXCrZMcF97P_MZgjsTNAyCiy4IQVt88ZsfYGMGKexxMihpZ83OplnsrMQnHO43wr1RctEEblXekhYmwfpV7YjCOn6aBkD42zGLVD6I",
      bestseller: true
    },
    {
      name: "Caprese Egg Croissant",
      desc: "Buttery croissant with eggs, tomato, and fresh pesto.",
      price: "₹280",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8uDiZFHfq2oTp5yqrWhhVPzYThV5iHdtwenRyDxDWEjxdinPj6mz9iyDkTdBi5OCkkFISi8CveJA0Gg4NQYCvDDlJda5Ohk-KsHjkm_WdqROT5EF1ENg2aAjEzyAyrHDr3Dhak932z5T9VZkoO9-f0HGK4PyTU09umlwt1zo9mFymSIIbcIGG9Nwd26pgrwmkxxoYMejsDiP-wvBCjH6yo_bvLLUTrgscXYrxFXAvujV3f9PgwT7SwRztqBxAjYwgmPDLtTsPT4A",
      bestseller: true
    }
  ],
  testimonial: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2KWE5ZG4s-JtGKrKmN88OtZwF9hKJGm3qQFN0q4kn3QaqyYjMxkfZmGNVmq3JXdQEBB9-0U-WMReuQ-GJl-1HDYHh7SM0Zl1Oy2tHdYNLwHBGmoJ1fmnnbObj_n1yt8c8jDwbQ00RhFcuCsLXEnqFhmomwQzrxSa6HG9aM7armn8o4kvjWuKlMssMSC4qb66nZx1tgfLEvnhsuiMw7ShllgQ1hLY2cR0es3MqGgysPSP6l1U5XaHQoiqfmBXgPnokdgnKkdWMokQ",
  gallery: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDt2UN2e1OBQDfFOu0TArF6IAifeHjO5UGvgk7YWqZZnjhEHnC_DNFJ9M00oQY6A_HBiY5wn73kOrHFsBPFfuHiiRjo0o3Wt_wm25a6maaNKt5I035wTr0VRXg37eaidz9wUXVF-Juv7BX7m2Q1rtXo4mHfKKaWB-tAi7riNunMYqi-qgnW9534MwjXgQ4prH6H8I11ettPTrzZoIXjhbgE2lJxFuJJ4AR1-kQxonTPO725xO5xfOOsW7CSjjjR-x0r3xAbYz9M_M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAPwypC4BPCiYf1aZheP6bE-m3KWbd-nblHrkOfRGrgDvL6tQ1llUBTFU5ee8IUsAeNW78jLStXqU-hcewN_EclN3cHLWnqFh9JvhZ-O714_pH3WuvQuUkK9VKb7hKhjZxyklQLDkAG-rAA5IEvL56o80tEh5wYUV41oU-brHUmebrP5ArxqIw-868NLfEPM-eDsISMTrmSz4NpCOimXqixVMPxPXdkRCZwaW7vsMkChrSMz9RDnppAhvFdpOWUFeFAfi0RuRILG60",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA8lDS7lqFVFutl77iHSRgDSxE0f7EuVnl7kVSqJrmOQWIUxr19nTQ7wYQznCYrllPcK1Do5BALcZfRgwPU_j_v0I6eycHgH6Ys1Bgqm2CCAEp6DIv3A_cKWLLwNIK-fYHiFkntQAf4_IgLIfcBbu_3-MhmJySckLIcYC7VUmCU6yMXi-pmdVc83XPr2RrCAgqPEpFY6UzgR34WPs10W24a3TS6PKElNUpRQZ5CXMdWpIIPk-9XWvCxbkZ-Fi7-j2rYDgGb8IDfW30",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuABtsWYR_7Ft8Hq3klOUfZ69U8lyRPbE2MmF1cH3b_mW-OB2bnewTVOBqqodh7P_ost2MYz5ClkYBuIyPSZGdGmTj6OKpZf0I391jIFNwt6JEZ5TlLnVjxswWbyGbFje2cpCpq0Jc2l7pDXlrGpavqxkY6HtPJXXjGwAW4KOpWcH8IGCf30E7RfzNPWz8v1IF3yiD4L7iKPLMDZKaEO5v41xFPPz8p_y9qKACRXHM5JQOtW2uA1XcVnwCMX2Sn_ZI5qelWojYVVR6Y",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBYh6KRe1TrdXuzblz0YCvl5hKBVRcJfNommK4N8X6sWYKysDQcQM4_xihrECiM63Ssj3ESdgmvZAX4rcaSfzyhIjzNmw2A-YTCIYLNb1I88098qYEB53OKWycV8WD83NU9ECgXaXMWNVHUlqUxyjpXn6ZzfdgrwR9xRpCIH4KDqeSgo-UkQZNullk-6vakLdFmjQJSW3ZWlbmWTuLcCqdwOM-ZwPhHNqLpxCFt7pb_ydX2mxv_WvVkoZeZznknCfn0sE80kI2Kln0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDto73jfcOPXc1FbjXVxAzA4IdkHVbcBMMH_q8WkSO9raIiprsrV2JrGQztR_EhgEw6Pfd5_HL0qJKYt34XsDSxOj3adeobYAW09LQTvH_qGih_l-6MpFWnV34Mg_6G5yjnwO0pjcYYfCmysinI5GUwFCE0MuyFonbFieq-iTly_HoQrPufC_0D5ZxtLNW2G0p8CNN310q6oyxdrhl-Gt1En1Yov5N7UaT-GxaMVrtgIdW4VekhHslW1YtjDiTVlyG8UUYS9_rIwpw"
  ],
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcBaCdCJSvok1Rf6y3brN_X3FFoBzDaoFh9rXcrcHWh_-_4X5SIVN8mYq4v_QbzYStDLV_pZ_KwGesKb-Fl5HWHcig8OyIA18DNnI6Ww4MAT67Snj1-pUfipO9gLXHPbx_o6xkiBGBGxgBS7ypJm06f0xTWYIeuapdaz8KuzvbeHorixVaYbjENT3NKrOsTqsGwmmnBdiuL5Oa_EwAdo-HWzSFvy6OdU97A3m4tlJ3sd3r2j81tLTUzbvpkOnc0TqhlCSfZKBLMPQ"
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(MENU_DATA[0].name);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredItems = MENU_DATA.find(c => c.name === activeCategory)?.items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.desc?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={IMAGES.logo} alt="Demitasse Logo" className="size-10 object-contain rounded-full" />
            <h1 className="font-serif text-2xl font-bold tracking-tight">Demitasse</h1>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {['Home', 'The Menu', 'Workspaces', 'Gallery', 'Location'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.zomato.com/pune/demitasse-coffee-nibm-road" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
            >
              Order Online
            </a>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white border-b border-primary/10 p-6 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {['Home', 'The Menu', 'Workspaces', 'Gallery', 'Location'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lg font-semibold hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Lush garden cafe" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 glass-card p-8 md:p-16 rounded-3xl max-w-4xl text-center text-white"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-white text-xs font-bold uppercase tracking-widest mb-6">
            Pune's Boutique Sanctuary
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Coffee Meets Calm
          </h2>
          <p className="text-lg md:text-xl font-light mb-10 text-slate-100 max-w-2xl mx-auto">
            Handcrafted brews and gourmet cuisine in a lush bungalow setting. Escape the city noise in our garden or focused co-working zones.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#the-menu" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-colors">
              Explore Menu
            </a>
            <a href="#location" className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
              Visit Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="home" className="py-24 bg-accent-cream px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src={IMAGES.about1} 
                alt="Bungalow cafe interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-8 border-accent-cream shadow-xl hidden md:block"
            >
              <img 
                src={IMAGES.barista} 
                alt="Barista pouring latte art" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Bungalow Reborn as Your Urban Sanctuary
            </h3>
            <p className="text-muted-green text-lg mb-6 leading-relaxed">
              Nestled in the quiet lanes of Pune, Demitasse is a home away from home. We've transformed a heritage bungalow into a multi-sensory experience where nature and productivity coexist.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Leaf className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Garden Courtyard</h4>
                  <p className="text-sm text-slate-600">Fresh air, birdsong, and sunlight. The perfect spot for brunch.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Laptop className="size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dedicated Workspace</h4>
                  <p className="text-sm text-slate-600">High-speed Wi-Fi and quiet zones for deep work sessions.</p>
                </div>
              </div>
            </div>
            
            <button className="flex items-center gap-2 text-primary font-bold group">
              Learn about our heritage 
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Signature Highlights */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-serif text-4xl font-bold mb-4">Signature Highlights</h3>
              <p className="text-muted-green max-w-lg">Our favorites, crafted with locally sourced ingredients and artisanal passion.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMAGES.highlights.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.bestseller && (
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                      Bestseller
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-xl mb-1">{item.name}</h4>
                <p className="text-muted-green text-sm mb-4">{item.desc}</p>
                <span className="font-bold text-primary text-lg">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section id="the-menu" className="py-24 px-6 bg-accent-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-5xl font-bold mb-4">The Full Menu</h3>
            <p className="text-muted-green">Explore our extensive collection of brews and bites.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {MENU_DATA.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setSearchQuery("");
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat.name 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white text-slate-600 hover:bg-primary/10'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-primary/10 rounded-full py-2.5 pl-11 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <motion.div 
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-x-16 gap-y-8"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-primary/10 pb-4 group">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h4>
                      {item.bestseller && (
                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold uppercase">Best</span>
                      )}
                    </div>
                    {item.desc && <p className="text-sm text-muted-green leading-relaxed">{item.desc}</p>}
                  </div>
                  <span className="font-bold text-slate-900 whitespace-nowrap">₹{item.price}</span>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-slate-400">
                No items found matching your search.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Experience Zones */}
      <section id="workspaces" className="py-24 bg-primary/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold mb-4">Find Your Corner</h3>
            <p className="text-muted-green">Three distinct zones designed for every mood.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="size-10" />,
                title: "Garden Seating",
                desc: "Dine under the canopy of trees. Perfect for morning coffee or pet-friendly brunches.",
                link: "Explore Garden"
              },
              {
                icon: <Coffee className="size-10" />,
                title: "Indoor Lounge",
                desc: "Cozy armchairs, soft lighting, and an elegant aesthetic for intimate conversations.",
                link: "Tour the Lounge"
              },
              {
                icon: <Laptop className="size-10" />,
                title: "Quiet Workspace",
                desc: "Sound-insulated zones with power outlets at every desk. High-speed Wi-Fi included.",
                link: "View Co-working"
              }
            ].map((zone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-6">{zone.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{zone.title}</h4>
                <p className="text-slate-600 mb-8">{zone.desc}</p>
                <a href="#" className="font-bold text-sm underline decoration-primary underline-offset-4 hover:text-primary transition-colors">
                  {zone.link}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-accent-cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 flex justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-6 fill-current" />)}
          </div>
          <h3 className="font-serif text-3xl md:text-4xl italic mb-12 leading-relaxed text-slate-800">
            "The only cafe in Pune where I can actually finish my work while enjoying the best Korean chicken in town. The vibe is unparalleled."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="size-14 rounded-full overflow-hidden bg-slate-200 shadow-md">
              <img 
                src={IMAGES.testimonial} 
                alt="Testimonial author" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Ananya Deshpande</p>
              <p className="text-xs text-muted-green uppercase tracking-wider font-semibold">Freelance Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-4xl font-bold mb-12 text-center">Aesthetic Moments</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {IMAGES.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`rounded-2xl overflow-hidden relative group ${i % 3 === 1 ? 'md:row-span-2' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery image ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="location" className="py-24 px-6 bg-accent-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary font-bold px-4 py-1.5 rounded-full text-xs mb-8 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              OPEN TILL 11:55 PM
            </div>
            <h3 className="font-serif text-5xl font-bold mb-8">Visit Us</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">NIBM Road, Pune</p>
                  <p className="text-muted-green">Unit No, 1-2, La Ventana, NIBM Rd, Kondhwa, Pune - 411048</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">+91 91122 66684</p>
                  <p className="text-muted-green">Call us for reservations or bulk orders</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Mon - Sun: 8:00 AM - 11:55 PM</p>
                  <p className="text-muted-green">Serving breakfast, lunch, and late night coffee</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Get Directions
              </button>
              <button className="border border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-colors">
                Call Now
              </button>
            </div>
          </div>
          
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps?q=Demitasse%20Coffee%20La%20Ventana%20NIBM%20Road%20Pune&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Demitasse Coffee Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark text-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={IMAGES.logo} alt="Demitasse Logo" className="size-8 object-contain rounded-full" />
                <h1 className="font-serif text-xl font-bold tracking-tight">Demitasse Coffee</h1>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Blending a peaceful garden vibe with a productive workspace. Your boutique sanctuary for handcrafted coffee and gourmet cuisine in Pune.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Navigation</h5>
              <ul className="space-y-4 text-slate-400">
                {['About Our Space', 'Food & Brews', 'Co-working Plans', 'Events & Workshops'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Support</h5>
              <ul className="space-y-4 text-slate-400">
                {['Contact Us', 'Privacy Policy', 'Refund Policy', 'Terms of Service'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 Demitasse Coffee House. All rights reserved.</p>
            <p>Handcrafted in Pune</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
