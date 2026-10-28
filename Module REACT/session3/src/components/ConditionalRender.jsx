const ConditionalRender = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return <h1>Login Successfull!</h1>
    } else {
        return <h1>Login Failed</h1>
    }
}

export default ConditionalRender