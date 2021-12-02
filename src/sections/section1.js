import React from 'react';
import Navbar from '../components/navbar';

import bg from '../images/Section 1.png';
import Aunty from '../images/Aunty.png';
import line from '../images/line.svg';

function Section1() {
  return (
    <div id='section1'>
      <Navbar />
      <div id='content'>
        <img src={Aunty} />
        <div>
          <h1>
            Welcome To <br />
            Happy Teacher Happy Life
          </h1>
          <p>
            Feeling overwhelmed or exhausted from <br />
            school taking over your whole life?
            <br />
            <br /> Ready to get back to health, happiness, and
            <br /> the joy of teaching? <br />
            <br />
            You have come to the perfect place.
          </p>
          <br />
          <button>Book a Call</button>
        </div>
      </div>
      <div id='content2'>
        <img src={line} />
        <div>
          <p>What’s your level of educator emotional intelligence?</p>
          <p>
            Find out if your emotional intelligence is helping or hindering your
            abilities as a teacher! Plus get <br />
            ready for life-changing transformations — I’m going to give you tips
            to boost your energy, simplify <br />
            your life, improve health, increase happiness, and bring back the
            joy of teaching.
          </p>
          <br />
          <button>Take the Quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
