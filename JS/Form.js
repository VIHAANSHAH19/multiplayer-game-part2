class Form{
    constructor(){}
    display(){
        var input= createInput("Name")
        input.position(200,100)
        var title=createElement('h1','Car Racing Game')
        title.position(200,0)
        var button=createButton('play')
        button.position(200,150)
        button.mousePressed(function(){
        input.hide()
        button.hide()
        title.hide()
        var greeting=createElement('h4','Hello')
        greeting.position(200,200)    
    })
    }
}