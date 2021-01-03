

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
        // console.log(props.recent, props.top)
        <div>
           {JSON.stringify(props)}
           </div>
    )
}

export default MainScreen