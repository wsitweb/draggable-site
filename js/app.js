window.onload = function() {

    window.onload = setTimeout(function(){

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: 'body',
            inertia: true,
        }, 100);

    });

};
