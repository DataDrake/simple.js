/*
 MIT License
 Copyright (c) 2016 Bryan T. Meyers
 */
u('form[simple-form]').each( function(form) {
    form.simpleform = {};
    u(form).on( 'submit', function (e) {
            // prevent the page from navigating after submit
            e.stopPropagation();
            e.preventDefault();
            ajax(form.action ? form.action : window.location.pathname , {
                    body: JSON.stringify(form.simpleform),
                    method: form.method
                }, function (err, data) {
                    if (!err) {
                        u("#" + form.id + "-success").html("<div data-alert class='alert-box success radius test-center '><i class='fa fa-fw fa-check'></i>Saved<a href='#' class='close'>&times;</a></div>");
                    } else {
                        u("#" + form.id + "-success").html("<div data-alert class='alert-box alert radius text-center'>Error:" + err + "<a href='#' class='close'>&times;</a></div>")
                    }
                },
                function (xhr) {
                    var msg = undefined;
                    switch (xhr.method) {
                        case 'get':
                            msg = "Fetching...";
                            break;
                        case 'put':
                            msg = "Saving...";
                            break;
                        case 'post':
                            msg = "Creating...";
                            break;
                        default:
                            msg = "Sending...";
                    }
                    u("#" + form.id + "-success").html("<div data-alert class='alert-box radius secondary text-center'><i class='fa fa-cog fa-spin'></i>" + msg + "</div>");
                });
        }
    );
});

u("form[simple-form] select").each( function(select) {
    if (select.multiple) {
        select.form.simpleform[select.name] = [];
        var selected = select.selectedOptions;
        for(var j = 0; j < selected.length; j = j + 1){
            select.form.simpleform[select.name].push(selected[j].value);
        }
    } else {
        select.form.simpleform[select.name] = select.value;
    }
    u(select).on( "change" , function (evt) {
        if( select.multiple ){
            select.form.simpleform[select.name] = [];
            var selected = select.selectedOptions;
            for(var j = 0; j < selected.length; j = j + 1){
                select.form.simpleform[select.name].push(selected[j].value);
            }
        } else {
            select.form.simpleform[select.name] = select.value;
        }
    });
});

u("form[simple-form] textarea").each( function(text) {
    u(text).on( "change" , function () {
        text.form.simpleform[text.name] = text.value;
    });
});

u("form[simple-form] input").each( function(input){
    switch( input.type ) {
        case "submit":
        case "reset":
            break;
        case "file":
            input.form.simpleform[input.name] = {};
            u(input).on( "change" , function () {
                var reader = new FileReader();
                var mime = input.files[0].type;
                reader.onloadend = function(){
                    input.form.simpleform[input.name] = { mime: mime, content: reader.result};
                };
                reader.readAsDataURL(input.files[0]);
            });
            break;
        default:
            input.form.simpleform[input.name] = "";
            u(input).on( "change" , function () {
                input.form.simpleform[input.name] = input.value;
            });
    }
});