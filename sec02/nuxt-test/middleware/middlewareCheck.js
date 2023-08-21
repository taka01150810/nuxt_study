// middlewareにもcontextが使える
export default function ( { route } ) {
    console.log('middlewareCheckです')
    console.log('middleware:', route.name)
}