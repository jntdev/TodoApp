let task = $('.list'); /* Variable du nombre de task left*/

function reload(task) { /*Fonction de rappelle du nombre de TASK */
    if (task.length < 2) {
        $('.foot p').text(task.length + " Task left.");
    } else {
        $('.foot p').text(task.length + " Tasks left.");
    };
}
reload(task);

function go() { /* Fonctino de création de TASK*/
    let input = $('.input').val();
    if (input != "" && input != " ") {
        $('.buck').append('<div class="list show notification is-info">' +
            '<input class="check" type="checkbox">' +
            '<p>' + input + '</p>' +
            '</div>'
        );
        $('.buck').children().last().hide(0, function() {
            $('.show').show("slow")
        });
        input = $('.input').val(""); /* effacement de l'input*/
        let task = $('.list'); /* mise a jour du nombre de task left*/
        reload(task);
    }
}

/* bouton GO qui ajoute une task*/
$('.input').keypress(function(e) { /* au clavier*/
    if (e.keyCode === 13) {
        go();
    }
})

$('.go').click(function() { /* au click */
    go();
});

/* Effacement de TASK via Done ! */
$('.del').click(function() {


    $('.check').each(function() {
        if ($(this).is(":checked")) {
            $('.buttonstyle').addClass("is-loading");
            $('.done').addClass("is-loading");
            $(this).closest('.list').hide(2000,
                function() {
                    $(this).remove();
                    let task = $('.list');
                    reload(task);
                    $('.done').removeClass("is-loading");
                    $('.buttonstyle').removeClass("is-loading").html("Select All")
                        .removeClass("unselect").addClass("all");
                })
        }
    })
});

$(document).on('click', '.check', function() { /* Click on Checkbox */
    $(this).closest('.list').toggleClass("is-success")
});

/* Select All / Unselect All button */
$('.buttonstyle').click(function() {
    $('.buttonstyle').toggleClass("all")
    if ($('.buttonstyle').hasClass("all")) {
        $('.check').each(function() {
            $(this).prop('checked', false);
            $(this).parent().removeClass("is-success");
            $('.buttonstyle').html("Select All");
            $('.done').css("margin-left", "50px");
        });
    } else {
        $('.check').each(function() {
            $(this).prop('checked', true);
            $(this).parent().addClass("is-success");
            $('.buttonstyle').html("Unselect All");
            $('.done').css("margin-left", "29px");
        });
    };
});
