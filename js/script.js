function() {
    var t = parseInt($(this).index()) + 1;
    $('td:nth-child(' + t + ')').removeClass('highlighted ');
        if(t>1){
         var t1 = t -1;
         $('td:nth-child(' + t1 + ')').removeClass('highlightedPrev');
    }
});