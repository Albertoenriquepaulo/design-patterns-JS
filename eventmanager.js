// We need to be able to 
//     Subscribe
//     Unsubscribe and
//     Publish
// lets go ahead and define these thre functions

define(function() {
    
    // first of all we need to know what we are subscribing or THE EVENT, 
    // I call that parameters type. Afther it we need a function 'fn' to execute whenever 
    // we pubish the event for that particular type
    function subscribe(type, fn) {
        
    }

    // We need the unsubscribe method as well. And in this function we need the same info
    function unsubscribe(type, fn) {
        
    }

    // and finally we need a function to publish. First of all we need to know the type 
    // that we are publising for, also need to pass something to the subscribe, and in DOM API
    // that's usually done with an event object, so we will replicate that with our own event object
    function publish(type, fn) {
        
    }

    // Now we have defined these three functions, let's go ahead and write our return statement
    // The method on this object are going to match our three functions 
    return {
        subscribe : subscribe,
        unsubscribe: unsubscribe,
        pubish: publish
    };
});