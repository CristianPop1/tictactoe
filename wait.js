function wait(ms)
{
    var start = new Date().getTime()
    var end = start
    while(end < start+ms){
        var end = new Date().getTime()
    }
}