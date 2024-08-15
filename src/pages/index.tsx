import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../components/About';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <Layout>
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center p-8 rounded-lg bg-black bg-opacity-60">
            <h1 className="text-4xl font-bold text-white mb-8">Welcome to Yogaya-Logger</h1>
            <p className="text-lg text-white max-w-xl mx-auto">
              Yogaya-Logger is your go-to solution for logging and monitoring your applications efficiently.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative w-full py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/contact.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional overlay */}
        <div className="relative flex items-center justify-center w-full">
          <div className="w-1/2 max-w-lg p-8 bg-white bg-opacity-20 shadow-lg rounded-lg">
            <ContactForm />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative w-full py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Optional overlay */}
        <div className="relative max-w-6xl mx-auto p-8 bg-white bg-opacity-80 shadow-lg rounded-lg">
          <About />
        </div>
      </section>
    </Layout>
  );
}
