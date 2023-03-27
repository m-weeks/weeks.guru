import React, { useState, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
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
      <div className={classNames.welcomeAnimationWrapper}>
        <TypeAnimation
          sequence={
            [
              "",
              3000,
              text,
              onFinished,
            ]
          }
          speed={5}
          className={[classNames.introAnimation, 'codeTyping', 'underscore'].join(' ')}
        />
      </div>
    </>
  )
};

export default WelcomeAnimation;
