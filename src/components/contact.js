import React, {Component} from 'react';

class Contact extends Component {
  render () {
    return (
      <div class="container">
        <div class="contact-section">
          <h2 class="ct-section-head">
             CONTACT ME
          </h2>
        </div>
        <div class="row contact-fields">
          <div class="col-md-8 left-form">
             <form action="https://formspree.io/calebkress@gmail.com" method="POST">
                <div class="form-group">
                   <label class="sr-only" for="fname">First Name: </label>
                   <input class="required form-control" id="fname" name="fname" placeholder="First Name&nbsp;*" type="text"></input>
                </div>
                <div class="form-group">
                   <label class="sr-only" for="lname">Last Name: </label>
                   <input class="required form-control" id="lname" name="lname" placeholder="Last Name&nbsp;*" type="text"></input>
                </div>
                <div class="form-group">
                   <label class="sr-only" for="contactEmail">Email: </label>
                   <input class="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="Email&nbsp;*" type="text" />
                </div>
                <div class="form-group">
                   <label class="sr-only" for="contactPhone">Phone: </label>
                   <input class="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="Phone&nbsp;*" type="text" />
                </div>
                <div class="form-group">
                   <label class="sr-only" for="comment">Type your message here: </label>
                   <br />
                   <textarea class="required form-control" id="comment" name="comment" placeholder="Type your message here&nbsp;*" rows="6"></textarea>
                </div>
                <button class="btn btn-accent" type="submit">Submit</button>
             </form>
          </div>
        </div>
        <div class="col-md-4 contact-info">
          <div class="phone">
             <h2>Call</h2>
             <a href="tel:+5125602293">512.560.2293</a>
          </div>
          <div class="email">
             <h2>Email</h2>
             <a href="mailto:calebkress@gmail.com">calebkress@gmail.com</a>
          </div>
        </div>
      </div>
    )
  }
}



export default Contact;
