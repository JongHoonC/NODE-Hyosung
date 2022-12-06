# NODE-Hyosung

https://okky.kr/articles/677228

해당 페이지가 보일 시 $(select).find(select).addClass(class)

https://github.com/michalsnik/aos/issues/490

AOS.init(); // AOS initiation

$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document

new fullpage('#fullpage', { // standard fullpage usage
responsive: true,
navigation: true,
anchors: ['start', 'quality', 'performance', 'dob', 'parameters','compatibility', 'options', 'contact'],

    afterLoad: function(){
        var a_table = ['start', 'quality', 'performance', 'dob', 'parameters','compatibility', 'options', 'contact'];   // duplicated table of anchors name

        for (var i = 0; i < a_table.length; i++) {
            $('.section-'+ a_table[i] +'.active .aos-init').addClass('aos-animate'); // all magic goes here - when page is active, then all elements with AOS will start animate
        }
    }

}
