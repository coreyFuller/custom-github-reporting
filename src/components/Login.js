

Login = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted")
    }

    
    return(
    <div>
        Login
        <form onSubmit= {onSubmit}>
            <input>
            </input>
            <button type='submit'>
                Enter
            </button>
        </form>
    </div>
    )
}



export default Login