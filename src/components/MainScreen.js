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
        'PowerShell' : 'https://docs.microsoft.com/en-us/powershell/',
        'CSS' : 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        'PHP' : 'https://www.php.net/docs.php',
        'Shell' : 'https://devdocs.io/bash/',
        'HTML' : 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        'Dockerfile' :  'https://docs.docker.com/'
    }

    return(
        <div className='m-4 p-12'>
            <div className='flex justify-center'>
                <img className='rounded-full opacity-80' src={`https://github.com/${props.recent[0].owner.login}.png?size=200`}/>
            </div>
            <h1 className={'text-6xl font-bold flex flex-row px-11 justify-center text-gray-800 text-opacity-50  mb-6 '}>
                <span className=' mr-5 ' >
                Welcome
                </span>
                <span className='justify-center italic'> 
                    {props.recent[0].owner.login}
                </span>
            </h1>
            <div className='flex mb-14 justify-center'>
            <div className='h-0.5 bg-black w-3/4 opacity-10 '>
            </div>
            </div>
            <div>
            {
            props.recent.length > 1 ?
            <section className='text-center text-2xl items-center mb-8'>
                Your Recently Changed Repositories
                <div className='flex flex-row text-base items-center text-center justify-center'>
                {props.recent.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))}
                </div>
            </section>
            :
            <section className='text-center text-2xl items-center mb-8'>
            Your Recently Changed Repository
            <div className='flex flex-row text-base items-center text-center justify-center'>
            {props.recent.map((item, index) => (
                <Repo key={index} render={item.name} link={item.html_url}/>
            ))}
            </div>
         </section>
            }
        </div>
            {console.log(props.top)}
            { props.top.length > 1 ?              
            <section className='text-center text-2xl items-center mb-8'>
                Your Most Popular Repositories
                <div className='flex flex-row text-base items-center text-center justify-center'>
                {props.top.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))} 
                </div>
            </section>
            :
            <section className='text-center text-2xl items-center mb-8'>
                Your Most Popular Repository
                <div className='flex flex-row text-base items-center text-center justify-center'>
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
                <div className="flex justify-center">
                <div onClick ={()=> window.open(doc_links[props.lang], "_blank")} className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2 text-lg'>
                    Link to the language documentation
                    </div>
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default MainScreen