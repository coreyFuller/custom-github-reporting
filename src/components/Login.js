import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'
import axios from 'axios'

const Login = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value);
        props.name(event.target[0].value)
        props.logged(true)
        // console.log(event.target[0].value)
        axios.get((`https://api.github.com/users/${event.target[0].value}/repos`), {
            headers : {
                'Authorization' : `key=${process.env.TOKEN}`
            }
        }
        ).then((response) => props.repo(response.data))
        
        // console.log(props.name, props.logged)
        // props.logged_in = true;
    }    

    return(
    <main className='flex-col justify-items-center align-middle'>
        <h1 className={styles.title}>Github Reporting</h1>
        <img src='/Github-Mark-120px-plus.png'/>     
        Login
        <form onSubmit= {onSubmit}>
            <input 
            placeholder='Enter Here'
            type='string'
            >
            </input>
            <button type='submit'>
                Enter
            </button>
        </form>
    </main>
    )
}



export default Login