import './Greeting.css';
function Greetings() {
    const class1 = 'txt'
    const name = 'M.A'
  return (
    <>
      <h1 className={class1}>&quot;Oi {name}&quot;</h1>
      <ul>
        <li style={
            {
                backgroundColor:'gold',
                color:'yellow'
            }
        }>"Focus"</li>
        <li>Fight</li>
        <li>Never Give Up</li>
        <li>Win</li>
      </ul>
      <input />
    </>
  );
}

// export { Greetings };
export default Greetings;
