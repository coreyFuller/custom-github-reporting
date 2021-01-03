import styles from '../../styles/Home.module.css'

const Repo = (props) => {
    return (
        <div className='p-4 border-2 border-gray-900 rounded-xl m-2 flex flex-col items-center'>
            <img src='/GitHub-Mark-32px.png'/>
            {props.render}
            <div>
            <div onClick ={()=> window.open(props.link, "_blank")} className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2 text-lg'> 
                Go to Repository 
            </div>    
            </div>    
        </div>
    )
}

export default Repo