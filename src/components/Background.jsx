import React, { useRef, useEffect } from 'react';
import _ from 'lodash';

const characters = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ:.=*+-<>日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ'.split('');
const fontSize = 16;
const font = 'monospace';
const opacityMod = 0.05;

const Background = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    // Set canvas width and height to the values determined by css
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const context = canvas.getContext('2d');

    // Start canvas as black
    context.fillStyle = '#000000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    const columns = Math.ceil(canvas.width / fontSize);
    const maxY = Math.ceil(canvas.height / fontSize);
  
    // Array that contains the current y coordinate for each column
    let yPositions = Array.from(new Array(columns)).map((_xPosition) => {
      return _.random(-1 * maxY, 0);
    });

    const draw = () => {
      context.fillStyle = `rgba(0,0,0,${opacityMod})`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle =  '#03DA6F';
      context.font = `${fontSize}px ${font}`;

      // Draw each character and then increment the Y position
      yPositions = yPositions.map((yPosition, xPosition) => {
        const character = characters[_.random(characters.length - 1)];
        context.fillText(character, xPosition * fontSize, yPosition * fontSize);

        // Once passed, there will be a 5% chance to be moved back to the top
        if (yPosition > maxY && _.random(100) >= 95) {
          return 0;
        }

        return yPosition + 1;
      });
    }

    const interval = setInterval(draw, 85);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ height: '100vh', width: '100vw', position: 'fixed', zIndex: -1 }}
      />
    </>
  )
};

export default Background;
