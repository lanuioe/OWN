import React, { useRef, useEffect, useState } from 'react';

const CanvasTest = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('black');
  
    useEffect(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      contextRef.current = canvas.getContext('2d');
    }, []);
  
    const startDrawing = () => {
      setIsDrawing(true);
    };
  
    const stopDrawing = () => {
      setIsDrawing(false);
      contextRef.current.beginPath();
    };
  
    const draw = (event) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event.nativeEvent;
      contextRef.current.fillStyle = color; // 선택한 색상 사용
      contextRef.current.fillRect(offsetX, offsetY, 5, 5);
    };
  
    const clearCanvas = () => {
      const canvas = canvasRef.current;
      const context = contextRef.current;
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  
    return (
      <div>
        <p> 컬러선택 
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
        </p>

        <button onClick={clearCanvas}>지우기</button>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          style={{ border: '1px solid black' }}
        />
      </div>
    );
};

export default CanvasTest;
