import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hands from '../images/hands.png';
import redPill from '../images/redpill.png';
import bluePill from '../images/bluepill.png';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.body}>
      <div>
        <h1 className={[classes.name, "codeTyping"].join(' ')}>
          Matt Weeks
          {/* Adds the same flashing underscore as the welcome animation */}
          <TypeAnimation
            sequence={['']}
            className="underscore"
          />
        </h1>
      </div>

      <div className={classes.handsWrapper}>
        <a href="https://github.com/m-weeks" target="_blank" className={[classes.pill, classes.redPill].join(' ')}>
          <img src={redPill} />
        </a>
        <a href="https://www.linkedin.com/in/matt-weeks-b61a0915b" target="_blank" className={[classes.pill, classes.bluePill].join(' ')}>
          <img src={bluePill} />
        </a>
        <img src={hands} className={classes.hands} />
      </div>
    </div>
  )
};

export default Home;