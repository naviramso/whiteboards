import './whiteboard.css'

export function Whiteboard() {
  return <div className='canvas'>
    <canvas width={500} height={500}></canvas>
  </div>;
}
