class Player{
    constructor(){

    }
    getCount(){
        database.ref('playerCount').on("value",function(){
            var playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

}