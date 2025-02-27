const Contact = () => {
    return (<div>
      <h1 className="text-2xl font-bold">Contactez-nous</h1>
      <form action="/my-handling-form-page" method="post">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name" />
      </div>
    
      <div>
        <label for="mail">Email:</label>
        <input type="email" id="mail" name="user_email" />
      </div>
    
      <div>
        <label for="msg">Message:</label>
        <textarea id="msg" name="user_message"></textarea>
      </div>
    
      <div className="button">
        <button type="submit">Send your message</button>
      </div>
    </form>
    </div>
    );
  };
  
  export default Contact;
  