const { exec } = require('child_process');
let args = process.argv;
args.splice(0, 2);
let str = args.join(' ');
exec(`git add . && git commit -m"${str}"`, push);

function push(err, strout, sdtin) {
  if (err) {
    console.log(err);
    return;
  }
  //it worked
  exec('git push origin beelz', success)
}
function success(err, stout, stdin){
  if(err){
    console.log(err);
    return;
  }
  console.log(`You have commited "${str}"`)
}