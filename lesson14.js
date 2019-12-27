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

function suma(evt){
    console.log(evt.a + evt.b);
}

function suma1(evt){
    console.log(100*(evt.a + evt.b));
}

function suma2(a,b){
    console.log(a + b);
}

const evtman = new Subject();

evtman.subscribe('test/foo', foo);
evtman.subscribe('test/suma', suma);
evtman.subscribe('test/suma', suma1);

evtman.publish('test/foo', { message: 'Hello this is a custom event' });
evtman.publish1('test/foo', { message: 'Hello this is a custom event 1' });
//evtman.unsubscribe('test/foo', foo);
evtman.unsubscribe1('test/foo', foo);

evtman.publish('test/foo', { message: 'This sould not be seen' });


evtman.publish2('test/suma', { a: 10, b: 5 });
evtman.publish2('test/suma', { a: 10, b: 5 });
evtman.unsubscribe('test/suma', suma);
evtman.publish2('test/suma', { a: 10, b: 50 });
evtman.unsubscribe1('test/suma2', suma);
//evtman.unsubscribe('test/suma', suma);
