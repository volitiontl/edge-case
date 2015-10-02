var args=require('./args-walker');

//todo add a valid unit test instead of this

//var array=[[0,1],[0,1],[0,1],[0,1,2,3]]
//var array=[[0,1],[0,1]]

var array=[[0,1],[1,2],[3,4]]

var func=function(a){
  console.log(a)
}
var temp= new args([[1,2,3],[1,2,3]])


temp.run(func)
