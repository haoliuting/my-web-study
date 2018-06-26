function ajax(url){
    return new Promise(function(resolve,reject){
        var xhr=new XMLHttpRequest();
        xhr.open('get',url,true);
        xhr.send(null);
        xhr.onreadystatechange=function(){
            if(xhr.status >= 200 && xhr.status <300 || xhr.status == 304){
                console.log(xhr.responseText)
                resolve(xhr.responseText)
                // resolve("222222")
			}else{
				reject(xhr.status);
			}
           
        }
    })
}
module.exports={
    ajax
}