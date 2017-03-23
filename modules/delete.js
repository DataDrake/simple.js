/*
 MIT License
 Copyright 2017 Bryan T. Meyers
 */
u("a[simple-delete]").each( function(d){
        u(d).on( "click", function(evt) {
            // prevent the page from navigating after submit
            evt.stopPropagation();
            evt.preventDefault();
            var check = confirm("Are you sure you want to delete this item?");
            if( check ) {
                ajax(d.href, {method: 'delete'}, function (err){
                    var msg = '';
                    if(!err) {
                        msg = 'Success!';
                        u(d).closest(u(d).attr("simple-delete")).remove();
                    } else {
                        msg = err;
                    }
                    u('delete-status').html("<div data-alert class='alert-box alert radius'>" + msg + "<a href='#' class='close'>&times;</a></div>");
                }, function(){
                    u('delete-status').html('<div data-alert class="alert-box radius secondary text-center"><i class="fa fa-cog fa-spin"></i> Deleting...</div>');
                });
            }
        });
    }
);