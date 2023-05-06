import Features from "../features/components/Features";
import Heros from "../features/components/Heros";
import Stats from "../features/components/Stats";
import Testimonial from "../features/components/Testimonial";
import Unique from "../features/components/Unique";
function Homepage() {
  return (
    <div>
      <Heros />
      <Features />
      <Unique />
      <Testimonial />
      <Stats />
    </div>
  );
}

export default Homepage;
