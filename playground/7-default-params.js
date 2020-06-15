// name variable value it could be any of primitive type no., array, boolean, anonymous function, object, string and other default value or paramter


const greeter = (name) => { 
    if(name === undefined) {

    console.log('Hello WOrld')

} else {


    console.log('Hello ' + name)
}
}

greeter()