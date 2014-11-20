function isLoggedIn(){
    if(typeof $.cookie('baldurLogin') === 'undefined'){
        return false;
    }else{
        return true;
    }
}
