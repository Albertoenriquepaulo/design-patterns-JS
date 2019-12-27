// We need to be able to 
//     Subscribe
//     Unsubscribe and
//     Publish
// lets go ahead and define these thre functions

class MyClass {

    // (5) We need someway to keep track of our subscribers and we can do that with
    // a variable. 
    // the types that we pass to subscribe,unsubscribe and publsh are going to be
    // properties on this object
    constructor() {
        this.subscribers = {};
    }
    
    
    // (1) first of all we need to know what we are subscribing or THE EVENT, 
    // I call that parameter 'type'. Afther it, we need a function 'fn' to execute whenever 
    // we pubish the event for that particular type
    subscribe(type, fn) {
        let subscribers = this.subscribers;
        // (6) We first want to check to see if we have a property with our type parameter
        // that's means if we do not have that property then we simply want to create it
        if (!subscribers[type]) {
            subscribers[type] = [];
        }
        // (7) Now we want to add the function to this array, but only if the function does not
        // already exist within the array
        // we can use the indexof method to determine if we already have that function object
        if (subscribers[type].indexOf(fn) == -1) {
            subscribers[type].push(fn);
        }
    }

    // (2) We need the unsubscribe method as well. And in this function we need the same info
    unsubscribe(type, fn) {
        // (8) We will first check to see if we have a property with our type, if we dont then just 
        // going to return, because we dont need to do anything. But if we do, we need to ensure
        // that we have that function in the array , if we do then we will remove it from the array.
        // Let's to retrieve the subscribers for this type
        let listeners = this.subscribers[type];

        // (9) Then we have to see if we have anything with this listeners, if we dont then we willl
        // just retunr
        if (!listeners) {
            return;
        }
        // (10) Otherwise let's get the index of the supplied function
        let index = listeners.indexOf(fn);
        // (11) now we want to see if the index is greater than -1, that means that exist, 
        // and we want to remove it
        if (index > -1 ) {
            listeners.splice(index, 1);
        } 
    }

    // (3) and finally we need a function to publish. First of all we need to know the type 
    // that we are publising for, also need to pass something to the subscribe, and in DOM API
    // that's usually done with an event object, so we will replicate that with our own event object
    publish(type, evtObj) {
        let subscribers = this.subscribers;
        // (12) first check if we have a property of type, if we dont then we want to return becasue
        // do not have anything to publish
        if (!subscribers[type]) {
            return;
        }
        // (13) Now we want to see if we have a type property, because if we dont we need to add one
        // to this event object
        if (!evtObj.type) {
            evtObj.type = type; // (14) we set the property of evtObj to our type parameter
        }

        // (15) Then we will get these subscribers for this type, I'll call that varable 'listeners'
        let listeners = subscribers[type];

        // (16) Then we simply want to loop through everything in our listeners array and call that
        // function, 
        for (let i = 0, l = listeners.length; i < l; i++) {
            // (17) Inside this loop we simply call listeners in each 'i' position and pass the event
            // object to that function 
            listeners[i](evtObj);
            
        }
        // (18) AND THIS IS OUR MODULE, WHICH IS SIMPLY BUT IT DOES WHAT IT NEEDS TO DO
    }

    // (4) Now we have defined these three functions, let's go ahead and write our return statement
    // The method on this object are going to match our three functions 
    // return {
    //     subscribe : subscribe,
    //     unsubscribe: unsubscribe,
    //     pubish: publish
    // };
};