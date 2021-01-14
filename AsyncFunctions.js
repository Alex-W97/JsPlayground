/**
 * async functions impls with both Promise & async ways 
 */

console.log('execution starts.')
console.log('expected to execute two tasks.')
executeTask(1);
console.log('task 1 executed.')
console.log('task 2 executed.')
executeTask0(2);
console.log('task assigned.')
async function executeTask(id){
 // await can only be used inside a async task
 // it will await till set Timeout Compelete
  await new Promise(resolve => {
    setTimeout(() => {
            resolve('resolved');
        }, 2000);
    })
    console.log('task ' + id + 'complete')
}

function executeTask0(id){
    new Promise(()=>{
        haltFor2sec();
    }).then(console.log('task ' + id + 'complete'))
}

function haltFor2sec(){
    setTimeout(() => {
        console.log('kick')
    }, 2000);
}