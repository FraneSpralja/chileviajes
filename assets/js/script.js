$(function(){
    //Smooth scroll
    $("a").click(function(event){
        if (this.hash !==""){
            event.preventDefault();
            var smooth = this.hash;
            $('html, body').animate({
                scrollTop: $(smooth).offset().top
            }, 800, function(){
                window.location.hash = smooth;
            });
        };
    });
    $("h5").on("dblclick", function(){
        #(this).css({
            'font-weight':'bold',
            'color':'red',
            'font-size':'2em',
        })
    })
});