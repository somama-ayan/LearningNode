console.log('Start .......')
const { readFile, writeFile} = require('fs')
// asycnronusly reading and writing files through call backs 
// in first cb --- for first.txt --> assign result to variables then second cb
// in second cb --- for second.txt --> assign result to variable then third cb
// in third cb --- create file result-async.txt --> write the results of first and secont into it !

readFile('./content/first.txt','utf8',(err, result) => {
    if(err)
    {
        console.log(err)
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if(err)
        {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `Here is the result both first and second file : ${first}, ${second}`,
            {flag: 'a'},
            (err, result) => {
                if(err)
                {
                    console.log(err);
                    return;
                }
                console.log(first, second)
                console.log('The Task is ended .....')
            }
        )
    })
})
console.log('new Task started ..')