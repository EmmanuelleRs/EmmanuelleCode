import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null)
  
  const draw = (ctx, x, y) => {
    ctx.fillStyle = '#fff';
    ctx.arc(x*1, y*1, 1, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d');
    
    //Our draw come here
    for(let x = 0; x < 10; x ++){
        let y = x*.5;
        draw(context, x, y);
    }
  }, [])
  
  return <canvas style={{backgroundColor: '#010101', margin: 'auto'}} width={500} height={500} ref={canvasRef} {...props}/>
}

export default Canvas