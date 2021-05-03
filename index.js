const reactContentRoot = document.getElementById('root')

const createUnorderedList = React.createElement('ul', null, 
[React.createElement('li', null, 'item1'), 
React.createElement('li', null, 'item2')]
)

ReactDOM.render(createUnorderedList, reactContentRoot)