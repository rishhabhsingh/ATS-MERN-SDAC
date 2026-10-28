const ConditionalRender1 = (isLoggedIn) => {
  return (
    <div>
        {/* //Conditional Rendering using Ternary Operator */}
        {
            isLoggedIn ? <h1>Welcome....</h1> : <h1>Try Again</h1>
        }
        
        {/* //Conditional Rendering using Logical AND Operator */}
        {
            isLoggedIn && <h1>Welcome....</h1>
        }
    </div>
  )
}

export default ConditionalRender1