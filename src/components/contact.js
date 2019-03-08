import React, {Component} from 'react';

class Contact extends Component {
  render () {
    return (
      <div class="container">
        <div class="row contact-fields">
          <div class="col-md-8 left-form">
             <form action="https://formspree.io/calebkress@gmail.com" method="POST">
                <div class="form-group">
                   <label class="sr-only" for="fname">First Name: </label>
                   <input class="required form-control" id="fname" name="fname" placeholder="*" type="text"></input>
                </div>
                <div class="form-group">
                   <label class="sr-only" for="lname">Last Name: </label>
                   <input class="required form-control" id="lname" name="lname" placeholder="*" type="text"></input>
                </div>
                <div class="form-group">
                   <label class="sr-only" for="contactEmail">Email: </label>
                   <input class="required form-control h5-email" id="contactEmail" name="contactEmail" placeholder="*" type="text" />
                </div>
                <div class="form-group">
                   <label class="sr-only" for="contactPhone">Phone: </label>
                   <input class="required form-control h5-phone" id="contactPhone" name="contactPhone" placeholder="*" type="text" />
                </div>
                <div class="form-group">
                   <br />
                   <textarea class="required form-control" id="comment" name="comment" placeholder="Type your message here" rows="6"></textarea>
                </div>
                <button class="btn btn-accent" type="submit">Submit</button>
             </form>
          </div>
        </div>
      </div>
    )
  }
}



export default Contact;
