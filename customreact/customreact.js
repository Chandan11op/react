function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in object){
        if (object.hasOwnProperty.call(object, prop)){
            const element = object[prop];
        }
    }
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me to Visit Google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)

// const domElement = document.createElement(reactElement.type)
// domElement.innerHTML = reactElement.children
// domElement.setAttribute('href', reactElement.props.href)
// domElement.setAttribute('target', reactElement.props.target)
// container.appendChild(domElement)