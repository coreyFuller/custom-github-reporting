import { render } from 'react-dom'
import Repo from '../components/Repo'


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
        <div className='m-4 py-12 '>
            <section className='text-center text-2xl'>
                Your Recently Changed Repositories
                <div className='flex flex-row text-base'>
                {props.recent.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))}
                </div>
            </section>                
            <section className='text-center text-2xl items-center'>
                Your Most Popular Repositories
                <div className='flex flex-row text-base items-center text-center'>
                {props.top.map((item, index) => (
                    <Repo key={index} render={item.name} link={item.html_url}/>
                ))} 
                </div>
            </section>
            <section className='text-center text-2xl'>
                <p>Your most used language is: {props.lang}</p>
                <a className='hover:underline bg-blue-100 hover:text-blue-400 border-blue-300 border-solid border-2 rounded-lg m-2' href={doc_links[props.lang]}>
                    Link to the language documentation
                </a>
           </section>
        </div>
    )
}

export default MainScreen