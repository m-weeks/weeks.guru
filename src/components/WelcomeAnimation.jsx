import React, { useState, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Background from './Background';
import classNames from './WelcomeAnimation.module.css';

const text = "Entering the Mattaverse";

const WelcomeAnimation = (props) => {
  const { children } = props;

  const [loaded, setLoaded] = useState(false);

  const onFinished = useCallback(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (loaded) {
    return children
  }

  return (
    <>
      <Background />
      <div className={classNames.welcomeAnimationWrapper}>
        <TypeAnimation
          sequence={
            [
              "",
              3000,
              "Entering the Mattaverse",
              onFinished,
            ]
          }
          speed={5}
          className={classNames.introAnimation}
        />
      </div>
    </>
  )
};

export default WelcomeAnimation;
