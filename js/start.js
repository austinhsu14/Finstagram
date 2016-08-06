console.log('javascript linked');

$(document).ready(function() {
  console.log('jQuery is ready!');

  $('.homebutton').click(function(){
    window.alert("you clicked the home button");
    });

  $('.explore').click(function(){
    window.alert("you clicked the explore button");
  });

  $('.heart').click(function(){
    window.alert("you clicked the heart button");
    for(i = 0; i<10; i++){
      $('.heart').fadeOut();
      $('.heart').fadeIn();
    }
    });

  $('.profile').click(function(){
    window.alert("you clicked the profile button");
    });

  $('.like').click(function(){
    window.alert("you clicked the like button");
    $('.like').find('.likebutton');
    $('.likebutton').attr("src", "icons/redheart.png");
    $('.like').fadeOut();
  });

  $('.options').click(function(){
    window.alert("you clicked the options button");
    $('.options').animate(
      { width: '500px', height: '100px'},
      300);
    });
});
