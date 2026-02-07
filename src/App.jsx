import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Disciplines from "./components/Disciplines";
import Events from "./components/Events";
import Timeline from "./components/Timeline";
// import Registration from "./components/Registration";
// import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-foreground min-h-screen font-normal overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Disciplines />
      <Events />
      <Timeline />
      {/* <Registration /> */}
      {/* <Team /> */}
      <Footer />
    </div>
  );
};

export default App;
