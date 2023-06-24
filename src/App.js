import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:8000/register', {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setName("");
    }
  }
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Portfolio />
      <Testimonial />
      <Footer />
      <h1 class = "my_form">Please fill in this form</h1>
      <form action="" class = "sub_form">
        <input type="text" placeholder="name" required
          value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="email" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" class = "sub"
          onClick={handleOnSubmit}>submit</button>
      </form>
    </>
  );
}

export default App;
