function counter(count){
  this.max=count-1;
  this.current=0;
  this.done=false;
}

counter.prototype.inc=function(){
  if(this.current<this.max){
    this.current+=1;
  }
  if(this.current>=this.max){
    this.done=true;
  }
};
counter.prototype.reset=function(){
  this.current=0;
  this.done=false;
};


module.exports=counter;



