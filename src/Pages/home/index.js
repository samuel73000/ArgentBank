import "../../Styles/index.css";
import Feature from "../../Components/Feature";
function home() {
  const features = {
    src: [
      require("../../Assets/icon-chat.png"),
      require("../../Assets/icon-money.png"),
      require("../../Assets/icon-security.png"),
    ],
    title: [
      "You are our #1 priority",
      "More savings means higher rates",
      "Security you can trust",
    ],
    details: [
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      "The more you save with us, the higher your interest rate will be!",
      " We use top of the line encryption to make sure your data and money is always safe.",
    ],
  };
  return (
    <div>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <Feature
          src={features.src[0]}
          title={features.title[0]}
          details={features.details[0]}
        />
        <Feature
          src={features.src[1]}
          title={features.title[1]}
          details={features.details[1]}
        />
        <Feature
          src={features.src[2]}
          title={features.title[2]}
          details={features.details[2]}
        />
      </section>
    </div>
  );
}

export default home;
