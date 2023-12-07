import React, { Component } from 'react'
import City from './img/City.avif';
//import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div>
       
        <h3 className="title">We'd love to hear from you!</h3>
        <br />
        <br />
        <img src={City} alt="City" className="comp-img" />
        <br />
        <br />
        <p>Here at Cincy Finds, we strive to listen to our customers' voices and feedback; it's imperative that we understand your needs, and if you have any questions or concerns, you can complete the form below;we will respond as quickly as possible.</p>
        <br />
        <br />
        <h3 className="title">Tell us everything...</h3>
        <div className="container">
          <form action="">
            <input className="input" type="text" placeholder="First name" id="first-name" />

            <input className="input" type="text" placeholder='Last name' id="last-name" />

            <input className="input" type="text" placeholder='Email' id="email" />

            <textarea className="input" name="" cols="30" rows="10" placeholder='How can we help you?' id="help"></textarea>

            <input className='input' style={{width: "100px", height: "60px"}} type="submit" placeholder='Submit' />
          </form>
        </div>
        <br />
        <br />

        <h3 className='title'>Call or email us today!</h3>
        <br />
        <h3 className='title'>Phone number: (513) 628-4422 <br /> <br /> Email: cincy_finds_admin2023@yahoo.com</h3>
        <br />
        <br />
        <h3 className="title">Come and see us anytime!</h3>
        <br />
        <p>Hours: <br /> Monday-Friday: 10a-10p <br /> Saturday: 12p-12a <br /> Sunday: 12p-10p</p>
        <br />
        <br />
        <p>Thanks for stopping by Cincy Finds - Anything for our people!</p>
        {/*Footer /> */}
      </div>
    )
  }
}


export default Contact