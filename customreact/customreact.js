function customRender(reactElememt,container){
    /*const domElement=document.createElement(reactElememt.type)
    domElement.innerHTML=reactElememt.children
    domElement.setAttribute('href',reactElememt.props.href)
    domElement.setAttribute('target',reactElememt.props.target)

    container.appendChild(domElement)*/

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElememt.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: ['Click me']
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)