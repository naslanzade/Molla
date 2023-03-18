$(function(){
    let list=$(".dropdown-list")
    let link=$(".dropdown-link")

    link.click(function(e){
        e.preventDefault();
        list.slideToggle()
    });

    list.find("li").click(function(){

        let text=$(this).html();
        let icon="<i class=fa-solid fa-chevron-down></i>";

        link.html(text+icon);
        list.styleToggle();

    })  

})

$(function(){
    let listLang=$(".dropdown-list-lang")
    let linkLang=$(".dropdown-link-lang")
    
    linkLang.click(function(e){
        e.preventDefault();
        listLang.slideToggle()
    });
    
    listLang.find("li").click(function(){
    
        let text=$(this).html();
        let icon="<i class=fa-solid fa-chevron-down></i>";
    
        linkLang.html(text+icon);
        listLang.styleToggle();
    
    })



})
