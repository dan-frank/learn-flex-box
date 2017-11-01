$('#flex-direction-controller').on("click", function(){
    var flexWrapper = $('#flex-direction');
    var flexRemove = ["fd-row", "fd-row-reverse", "fd-column", "fd-column-reverse"];
    var flexAdd = $('input[name=flex-direction]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$('#flex-wrap-controller').on("click", function(){
    var flexWrapper = $('#flex-wrap');
    var flexRemove = ["fw-nowrap", "fw-wrap", "fw-wrap-reverse"];
    var flexAdd = $('input[name=flex-wrap]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$('#justify-content-controller').on("click", function(){
    var flexWrapper = $('#justify-content');
    var flexRemove = ["jc-flex-start", "jc-flex-end", "jc-center", "jc-space-around", "jc-space-between"];
    var flexAdd = $('input[name=justify-content]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$('#align-items-controller').on("click", function(){
    var flexWrapper = $('#align-items');
    var flexRemove = ["ai-stretch", "ai-flex-start", "ai-flex-end", "ai-center", "ai-baseline"];
    var flexAdd = $('input[name=align-items]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$('#align-content-controller').on("click", function(){
    var flexWrapper = $('#align-content');
    var flexRemove = ["ac-stretch", "ac-flex-start", "ac-flex-end", "ac-center", "ac-space-around", "ac-space-between"];
    var flexAdd = $('input[name=align-content]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$('#align-self-controller').on("click", function(){
    var flexWrapper = $('#align-self .active');
    var flexRemove = ["as-stretch", "as-flex-start", "as-flex-end", "as-center", "as-baseline", "as-auto"];
    var flexAdd = $('input[name=align-self]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);
});

$("input[name=order]").bind('keyup mouseup', function(){
    var $this = $(this);

    var flexWrapper = $('#order');
    var item = $('#order .' + $this.attr('class'));
    var itemVal = $this.val();

    item.css({ 'order' : itemVal });
});

$('#flex-grow-controller').on("click", function(){
    var flexWrapper = $('#flex-grow');
    var flexRemove = ["fd-row", "fd-column"];
    var flexAdd = $('input[name=flex-grow-direction]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);

    console.log(flexWrapper);
    console.log(flexRemove);
    console.log(flexAdd);
});
$("input[name=flex-grow]").bind('keyup mouseup', function(){
    var $this = $(this);

    var flexWrapper = $('#flex-grow');
    var item = $('#flex-grow .' + $this.attr('class'));
    var itemVal = $this.val();

    item.css({ 'flex-grow' : itemVal });
});

$('#flex-shrink-controller').on("click", function(){
    var flexWrapper = $('#flex-shrink');
    var flexRemove = ["fd-row", "fd-column"];
    var flexAdd = $('input[name=flex-shrink-direction]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);

    console.log(flexWrapper);
    console.log(flexRemove);
    console.log(flexAdd);
});
$("input[name=flex-shrink]").bind('keyup mouseup', function(){
    var $this = $(this);

    var flexWrapper = $('#flex-shrink');
    var item = $('#flex-shrink .' + $this.attr('class'));
    var itemVal = $this.val();

    item.css({ 'flex-shrink' : itemVal });
});

$('#flex-basis-controller').on("click", function(){
    var flexWrapper = $('#flex-basis');
    var flexRemove = ["fd-row", "fd-column"];
    var flexAdd = $('input[name=flex-basis-direction]:checked').val();

    $.each(flexRemove, function(i, v){
        flexWrapper.removeClass(v);
    });
    flexWrapper.addClass(flexAdd);

    console.log(flexWrapper);
    console.log(flexRemove);
    console.log(flexAdd);
});
$("input[name=flex-basis]").bind('keyup mouseup', function(){
    var $this = $(this);

    var flexWrapper = $('#flex-basis');
    var item = $('#flex-basis .' + $this.attr('class'));
    var itemVal = $this.val() + 'px';

    item.css({ 'flex-basis' : itemVal });
});
