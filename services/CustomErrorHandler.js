class CustomErrorHandler extends Error{
    constructor(status, msg){
        this.status = status;
        this.msg = msg;
    }
    // q k class ka obj banae ki need ni hoti
    static alreadyExist(message){
        return new CustomErrorHandler(409, message)
    }
}


export default CustomErrorHandler