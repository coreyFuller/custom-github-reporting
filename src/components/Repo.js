import styles from '../../styles/Home.module.css'

const Repo = (props) => {
    return (
        <div className={styles.card}>
            <img src='/Github-Mark-32px.png'/>
            {props.render}
            <form action={props.link} >
                <input className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2' type="submit" value="Go to Repository" />
            </form>
        </div>
    )
}

export default Repo