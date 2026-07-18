import { useState } from "react";
import "../styles/contact.css";

function Contact() {

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <section id="contact" className="contact">


      <h1>Reserve a Table</h1>


      <div className="contact-container">


        <div className="contact-info">

          <h2>Bean & Bloom Cafe</h2>

          <p>📍 Vijayawada, Andhra Pradesh</p>

          <p>☎ +91 98765 43210</p>

          <p>✉ beanandbloom@gmail.com</p>

          <p>⏰ Open Daily: 9:00 AM - 10:00 PM</p>


          <h3>Available Time Slots</h3>

          <p>☕ Morning: 9:00 AM - 12:00 PM</p>
          <p>🍽 Afternoon: 12:00 PM - 4:00 PM</p>
          <p>🌙 Evening: 5:00 PM - 10:00 PM</p>


        </div>



        <form 
  className="contact-form"
  id="reservation"
  onSubmit={handleSubmit}
>

          <input
            type="text"
            placeholder="Your Name"
            required
          />


          <input
            type="tel"
            placeholder="Phone Number"
            required
          />


          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            required
          />


          <input
            type="date"
            required
          />



          <select required>

            <option value="">
              Select Time Slot
            </option>

            <option>
              9:00 AM - 12:00 PM
            </option>

            <option>
              12:00 PM - 4:00 PM
            </option>

            <option>
              5:00 PM - 7:00 PM
            </option>

            <option>
              7:00 PM - 10:00 PM
            </option>

          </select>



          <textarea
            placeholder="Special Requests"
            rows="4"
          ></textarea>



          <button type="submit">
            Reserve Now
          </button>


        </form>


      </div>



      {submitted && (

        <div className="success-message">

          <h2>
            🎉 Booking Confirmed!
          </h2>

          <p>
            Your table reservation request has been received.
          </p>

          <p>
            We will contact you shortly for confirmation.
          </p>

        </div>

      )}


    </section>
  );
}


export default Contact;