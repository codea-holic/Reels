import React from 'react'

function Counter(props) {
    const {count, incrementChild} = props;
    console.log("Child Rendered");
  return (
      <>
      <div>``````````````````````````````</div>
      <button onClick={incrementChild}>child Count - {count}</button>
      </>
  )
}

export default React.memo(Counter); 