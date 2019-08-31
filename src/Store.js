import {observable,action,computed} from 'mobx';

class Store{

    @observable isLoggedin=false;
    @observable curuser=null;
}

const store=new Store();
export default store