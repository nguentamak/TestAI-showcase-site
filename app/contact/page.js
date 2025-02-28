import Layout from "../../components/Layout";
import "../../app/globals.css";

const Contact = () => {
    return ( <Layout><div>
      <h1 className="text-2xl font-bold">Contactez-nous</h1>
      <form action="/my-handling-form-page" method="post">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="user_name" />
      </div>
    
      <div>
        <label htmlFor="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />
      </div>
    
      <div>
        <label htmlFor="msg">Message:</label>
        <textarea id="msg" name="user_message"></textarea>
      </div>
    
      <div className="button">
        <button type="submit">Send your message</button>
      </div>
    </form>
    </div> </Layout>
    );
  };
  
  export default Contact;
  