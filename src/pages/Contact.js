import { Button, Form } from "react-bootstrap";


function Contact() {
  return (
    <div className="App">
      <h1>Contact</h1>
      <img src= "https://plus.unsplash.com/premium_photo-1679731353672-a94831f2b4f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" width="500px"/>
 <Form>
   <label htmlFor="name">Name: </label>
   <input type="text" id="name" name="name" placeholder="Enter your name" />
   </Form>

   <Form>
   <label htmlFor="email">Email: </label>
   <input type="text" id="email" name="email" placeholder="Enter your email address" />
   </Form>

   <Form>
   <label htmlFor="phone">Phone: </label>
   <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
   </Form>

   <Form>
   <label htmlFor="message">Message: </label>
   <input type="text" id="message" name="message" placeholder="Leave a message" />
   </Form>
	<br/>
<Button type="submit">Submit</Button>

    </div>
  );
}

export default Contact;
