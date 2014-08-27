/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var fadeSpeed = 2000;
var socialFadeSpeed = 250;

$(document).ready(function(){
    
    $('#welcome').avgrund({
        height: 200,
        holderClass: 'custom',
        showClose: true,
        showCloseText: 'Close',
        enableStackAnimation: true,
        onBlurContainer: '.container',
        template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
    '<div>' +
    '<a href="http://github.com/voronianski/jquery.avgrund.js" target="_blank" class="github">Avgrund on Github</a>' +
    '<a href="http://twitter.com/voronianski" target="_blank" class="twitter">Twitter</a>' +
    '<a href="http://dribbble.com/voronianski" target="_blank" class="dribble">Dribbble</a>' +
    '</div>'
    });
    
    $(this).delay(1000, function(){
        
        $('#author').fadeIn(fadeSpeed, function(){
            
            $('#profession').fadeIn(fadeSpeed, function(){
                
                $('#social #facebook').fadeIn(socialFadeSpeed, function(){
                                
                    $('#social #google').fadeIn(socialFadeSpeed, function(){
                                    
                        $('#social #twitter').fadeIn(socialFadeSpeed, function(){
            
                            $('#social #myspace').fadeIn(socialFadeSpeed, function(){
                                            
                                $('#social #in').fadeIn(socialFadeSpeed, function(){
                                                
                                    $('#social #skype').fadeIn(socialFadeSpeed);
                                                
                                });
                            });
                        });
                    });
                });
            });
            
        });
        
    });
    
});
