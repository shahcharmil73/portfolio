import Typewriter from 'typewriter-effect';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Charmil Shah</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"><Typewriter
  options={{
    strings: ['Full Stack Developer', 'Embedded System Engineer', 'Cloud Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
</span>{" "}
            <br />
          
          </h1>
          <p className="hero--section-description">
            
          </p>
        </div>
        <a href ="/contact"><button className="btn btn-primary">Get In Touch</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/IMG_9030.png" alt="Hero Section" />
      </div>
    </section>
  );
}
