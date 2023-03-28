function Contact() {
  return (
    <div className="App">
      <h1>Contact</h1>
 <form>
   <label htmlFor="name">Name:</label>
   <input type="text" id="name" name="name" placeholder="Enter your name" />
   </form>

   <form>
   <label htmlFor="email">Email:</label>
   <input type="text" id="email" name="email" placeholder="Enter your email address" />
   </form>

   <form>
   <label htmlFor="phone">Phone:</label>
   <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
   </form>

   <form>
   <label htmlFor="message">Message:</label>
   <input type="text" id="message" name="message" placeholder="Leave a message" />
   </form>
	


    </div>
  );
}

export default Contact;
