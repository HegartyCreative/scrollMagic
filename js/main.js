

$("document").ready(function(){


    var controller = new ScrollMagic.Controller();


    $('.fadeIn').each(function(){


     var tween = TweenMax.fromTo($(this), 1, {autoAlpha: 0, ease:Linear.easeNone},
        {autoAlpha: 1, color: "green", y: 0});


     var scene = new ScrollMagic.Scene({
        triggerElement: this
     })

     .setTween(tween)
     .addTo(controller);

    });

});

