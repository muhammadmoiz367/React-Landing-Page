import React from 'react';
import Aunty from '../images/Mask Group 11.png';
import line1 from '../images/Path 83.svg';
import line2 from '../images/Mask Group 33.svg';
import image from '../images/BG C2A Section.png';
import image2 from '../images/Social Awards LInes.svg';
import imageGroup8 from '../images/Group 28.png';
import imageCNET from '../images/CNET.png';
import imageSayHello from '../images/Say Hello.png';

import BgService from '../components/BgService';
import ImagineLife from '../components/ImagineLife';
import Footer from '../components/footer';

function Section2() {
  return (
    <div id='section2'>
      <div id='grid'>
        <img src={line1} id='line1' />
        <div id='content'>
          <div>
            <h1>Hi, I'm Lynn Hardin!</h1>
            <p>
              I'm a leadership and life coach for educators. I am the founder of
              "Happy Teacher Happy Life," and my mission is to help you find
              health and happiness. Let's get back to the things that make you
              happy: the success of your students, a supportive community,
              meaningful relationships, and wellness. <br />
              <br />
              I’m a "tell it like it is" Texan with a warm heart for teachers
              and our kids. I have a weakness for school supply stores, yummy
              art supplies, and the poems of Sarah Blondin. Lovely to meet you!
            </p>
            <br />
            <button>Book a Call</button>
          </div>
          <img src={Aunty} />
        </div>
        <img src={line2} id='line2' />
      </div>
      <BgService />
      <div id='dailyPlans'>
        <div>
          <h1>The Teacher Daily Planner</h1>
          <p>
            Use this simple one-page planner to create a day that is healthy and
            happy by writing your thoughts, goals, and to-dos.
          </p>
        </div>
        <button>Download the guide</button>
      </div>
      <ImagineLife />
      <div id='bookComplementoryCall'>
        <img src={image} />
        <div>
          <div>
            <h1>Book a Complimentary Call</h1>
            <p>
              Talk with Lynn and get your questions answered, receive more
              personal attention, and information.
            </p>
          </div>
          <button>Book Now</button>
        </div>
      </div>
      <div id='socialAwards'>
        <img src={image2} />
        <div>
          <h1>Social Awards</h1>
          <img src={imageGroup8} />
          <p>2020 - Honored as National Principal for Equity and Excellence</p>
          <p>2020 - Principal of Americas' Best Urban School</p>
          <img src={imageCNET} />
          <p>Certified Law of Attraction and Meditation Coach</p>
          <p>Certificated California Leadership Coach</p>
          <p>Certified Relationship and Life Coach</p>
        </div>
      </div>
      <div id='sayHello'>
        <img src={imageSayHello} />
        <div>
          <h1>Say Hello</h1>
          <p>
            I would love to hear from you! Whether you’re a teacher, school
            leader, district leader, school staff remember, or parent simply
            fill out the form or email <b>lynn@lynnhardin.com</b> and I’ll get back to
            you.
          </p>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Section2;
