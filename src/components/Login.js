import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'
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
    <main className='flex-col items-center flex font-bold align-middle m-10'>
        <h1 className={styles.title}>GitHub Reporting</h1>
        <img src='/GitHub-Mark-120px-plus.png' className ='m-10'/>  
        <div className='opacity-80 animate-pulse'>   
            Login with GitHub Username
        </div>
        <form onSubmit= {onSubmit}>
            <input 
            placeholder='Enter Here'
            type='string'
            className='mb-10 mt-3 border-2 border-blue-200  rounded-full'
            >
            </input>
            <button className='bg-transparent hover:text-blue-400 border-gray-200 border-solid border-2 rounded-full mb-10' type='submit'>
                Enter
            </button>
        </form>
    </main>
 )
}



export default Login