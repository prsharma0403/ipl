$(document).ready(function() {


    $(document).on('click', 'a.product-photo', function(e) {
        console.log("calling onclick method....");
        e.preventDefault();
        var index = $(this).attr("id");
        from(index);
    });

    function from(index) {

        console.log("calling...");

        var fref = firebase.database().ref();
        fref.on("value", function(data) {
            $("ul").replaceWith("<ul></ul>");
            $('h1.title').replaceWith("<h1 class='title' style='margin-top:15px;'>"+data.val()[index].team_name+"<b></b><h1> ");
            $.each(data.val()[index].team_players, function(i, f) {

                $("ul").append('<li style="display:inline-block;repeat:no-repeat;"><div>\
              <img style="max-width:180px;max-height:220px;" data-toggle="modal" data-target="#'+i+'" class="player"  src="' + f.player_img_url + ' "  alt="image1" /></br>' +
                    '<h4>' + f.player_name + '</h4>' + '<h6>' + f.player_role + '</h6>' +
                    '</div></li>');
              $("div.teamModal").append('<div class="modal fade" id="'+i+'" role="dialog">\
                                  <div class="modal-dialog modal-sm">\
                                <!-- Modal content--><div class="modal-content">\
                                        <div lass="modal-body">\
                                        <span style="color:gray">PLAYER NAME :<strong>'+ f.player_name+'<br></strong>\
                                        </span>\
                                        <span style="color:gray">PLAYER BATTING STYLE :<strong>'+ f.player_batting_style+'<br></strong>\
                                        </span>\
                                        <span style="color:gray">PLAYER BOWLING STYLE :<strong>'+ f.player_bowling_style+'<br></strong>\
                                        </span>\
                                        <span style="color:gray">NATIONALITY :<strong>'+ f.player_nationality+'<br></strong>\
                                        </span>\
                                        <span style="color:gray">D.O.B :<strong>'+ f.player_dob+'<br></strong>\
                                        </span>\
                                        </div>\
                                        <div class="modal-footer">\
                                          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                                        </div>\
                                      </div>\
                                    </div>\
                                  </div>');

            });
            $(".header").append('<a href="file:///var/www/html/ipl/index.html" style="float:right"><b>Back To HomePage</b></a>');
        });


    }


});

// <div class="modal-header">\
//           <button type="button" class="close" data-dismiss="modal">&times;</button>\
//           <h4 class="modal-title">Modal Header</h4>\
//         </div>\
