

import emailjs from "@emailjs/browser"; 
  

export default function ContactMe() {

  var name ="";
  var email ="";
  var message ="";
  var phone ="";
 
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    name = document.getElementById("first-name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value; 
    phone = document.getElementById("phone-number").value;

    console.log(name + email + message);

    emailjs
    .send(
      'service_du2vuua',
      'template_xki2qte',
      {
        from_name: name,
     
        from_email: email,
        phone: phone,
        message: message,
      },
      'HqXsuyPz4gyfWe2Rb',
    )
    .then(
      () => {
        
        alert("Thank you. I will get back to you as soon as possible.");
        document.foem.reset();
      },
      (error) => {
        
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );  

    
  }
    
      
  

  return (
    <section id="Contact" className="contact--section">
      <div>
       
        <h2>Contact Me</h2>
        <p className="text-lg">

        </p>
      </div>
      <form className="contact--form--container" onSubmit ={handleSubmit} name="foem">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              placeholder="First Name"
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
              placeholder="Last Name"
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
              placeholder="phone-number"
            />
          </label>
        </div>
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
       
        <div>
          <button type ="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
