// require(['eventmanager'], function (evtman) {

//     function foo(evt) {
//         console.log(evt.message);
        
//     }
    
//     evtman.subscribe('test/foo', foo);
//     evtman.publish('test/foo', { message: 'Hello this is a custom event' });
//     evtman.unsubscribe('test/foo', foo);

//     evtman.publish('test/foo', { message: 'This sould not be seen' });
    
// } )

    function foo(evt) {
        console.log(evt.message);
        
    }

const evtman = new MyClass();

evtman.subscribe('test/foo', foo);
evtman.publish('test/foo', { message: 'Hello this is a custom event' });
evtman.unsubscribe('test/foo', foo);

evtman.publish('test/foo', { message: 'This sould not be seen' });