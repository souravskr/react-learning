const firstElement = document.getElementById('root');
const list = [2, 1, 4, 6, 3]

// const createList = React.createElement('ul', null, [
//     React.createElement('li', null, list.filter(x => !(x%2)))
// ])

// Todo: JSX with Babel
// const myJSXElement = (
//     <ul>
//         {list.map(x => <li>{x}</li>)}
//     </ul>
// )

// Todo: 1. Making Component 

const App = ()=> {
    return (
        <ul>
            {list.map(x => <li>{x}</li>)}
        </ul>
    )
}


ReactDOM.render(<App />, firstElement)