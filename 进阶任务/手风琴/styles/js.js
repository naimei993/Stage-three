var all =document.getElementsByClassName('all');
var card = document.getElementsByClassName('card');
for(var i = 0;i<card.length;i++){
    card[i].addEventListener("mouseover",function(){
        removeActive();
        card[i].id=card[i].id.replace('','active');
    })
    
}
function removeActive(e){
    var event = e || window.event;
    var target = event.target ||event.srcElement;
    for(var i = 0;i<card.length;i++){
        card[i].id=''; 
}
    target.id = 'active';
}

