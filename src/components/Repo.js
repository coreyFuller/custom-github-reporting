import styles from '../styles/Home.module.css'

const Repo = (props) => {
    return (
        <div className={styles.card}>
            <img src='/GitHub-Mark-32px.png'/>
            {props.render}
            <div onClick ={()=> window.open(props.link, "_blank")} className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2 max-w-min'> 
                Go to Repository 
            </div>        
        </div>
    )
}

export default Repo