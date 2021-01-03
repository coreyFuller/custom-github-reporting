import { render } from 'react-dom'
import Repo from '../components/Repo'
import styles from '../../styles/Home.module.css'

const MainScreen = (props) => {
    const doc_links  = {
        "Python": "https://docs.python.org/3/",
        "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
        "C++": 'https://devdocs.io/cpp/',
        'C' : 'https://devdocs.io/c/',
        'Java' : 'https://docs.oracle.com/en/java/',
        'Javascript' : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
        'Go' : 'https://golang.org/doc/',
        'Lua': 'https://www.lua.org/docs.html',
        'R' : 'https://www.rdocumentation.org/',
        'Swift' : 'https://swift.org/documentation/',
        'Typescript' : 'https://www.typescriptlang.org/docs/',
        'Ruby' : 'https://www.ruby-lang.org/en/documentation/',
        'PowerShell' : 'https://docs.microsoft.com/en-us/powershell/'
    }

    return(
        <div className='m-4 p-12 '>
            <h1 className={styles.title + ' flex flex-row px-11 justify-center text-blue-300 text-opacity-50'}>
                Welcome  
                <div className='underline justify-center'> 
                    {props.recent[0].owner.login}
                </div>
            </h1>
            <section className='text-center text-2xl'>
                Your Recently Changed Repositories
                <div className='flex flex-row text-base'>
                {props.recent.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))}
                </div>
            </section>  
            { props.top.length > 1 ?              
            <section className='text-center text-2xl items-center'>
                Your Most Popular Repositories
                <div className='flex flex-row text-base items-center text-center'>
                {props.top.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))} 
                </div>
            </section>
            :

            <section className='text-center text-2xl items-center'>
                Your Most Popular Repository
                <div className='flex flex-row text-base items-center text-center'>
                {props.top.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))} 
                </div>
            </section>
            }
            <section className='text-center text-2xl'>
                <div className='flex flex-row  place-content-center'>
                    <div className='flex flex-col '>
                <p className='justify-center items-center self-auto'>Your most used language is: {props.lang}</p>
                <div onClick ={()=> window.open(doc_links[props.lang], "_blank")} className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2 max-w-min'>
                    Link to the language documentation
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default MainScreen