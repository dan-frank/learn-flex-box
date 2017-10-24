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
