import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Login = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        props.name(event.target[0].value)
        props.logged(true)
        axios.get((`https://api.github.com/users/${event.target[0].value}/repos`), {
            headers : {
                'Authorization' : `key=${process.env.TOKEN}`
            }
        }
        ).then((response) => props.repo(response.data))
    }    

    return(
    <main className='flex-col justify-items-center align-middle'>
        <h1 className={styles.title}>Github Reporting</h1>
        <img src='/GitHub-Mark-120px-plus.png'/>     
        Login
        <form onSubmit= {onSubmit}>
            <input 
            placeholder='Enter Here'
            type='string'
            >
            </input>
            <button className='hover:underline bg-transparent hover:text-blue-400 border-gray-200 border-solid border-2 rounded-lg m-2' type='submit'>
                Enter
            </button>
        </form>
    </main>
 )
}



export default Login