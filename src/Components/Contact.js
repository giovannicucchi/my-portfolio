import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';


class Contact extends React.PureComponent {
   constructor(props) {
     super(props);
     this.state = {
       contactName: '',
       contactEmail: '',
       contactSubject: '',
       contactMessage: ''
     }
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.resetForm = this.resetForm.bind(this);
     this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      const { contactName, contactEmail, contactSubject, contactMessage } = this.state;
      console.log('CONTACT MESSAGE', contactMessage)
      const templateParams = {
        from_name: contactName,
        from_email: contactEmail,
        to_name: 'Giovanni Cucchi',
        contactSubject,
        message_html: contactMessage,
      };
      emailjs.send(
        'service_fl7pc3b',
        'template_q5z4vez',
         templateParams,
        'user_0foZoXEvSPQR0oOz4cacp'
      )
      this.resetForm();
    };
  
    resetForm() {
      this.setState({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: 'Email Sent!',
      });
    }
  
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }


  render() {
     const { contactName, contactEmail, contactSubject, contactMessage, sentMessage } = this.state;


    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>
         <div className="row">
            <div className="eight columns">
               <form onSubmit={(e)=> this.handleSubmit(e)} action="" method="post" id="contactForm" name="contactForm">
					<fieldset>
                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" value={contactName} onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" value={contactEmail} onChange={this.handleChange}/>
                  </div>
                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" value={contactSubject} onChange={this.handleChange}/>
                  </div>
                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="2" id="contactMessage" name="contactMessage" value={contactMessage} onChange={this.handleChange} />
                  </div>
                  <div>
                     <button className="submit" type='submit'>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
           <div id="message-warning">Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact Info</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state}<br />
						   <span>{phone}<br/></span>
                     <span>{email}</span>
					   </p>
				   </div>

            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;