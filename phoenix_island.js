$( document ).ready(function() {
    console.log( "ready!" );

var i=0 , lock=0 ;PM=[];
// Replaces Jquery Toggle .. that is no longer avaiable after 1.9
  $.fn.toggleClick=function(){
    var functions=arguments
  	return this.click(function(){
			var iteration=$(this).data('iteration')||0
			functions[iteration].apply(this,arguments)
			iteration= (iteration+1) %functions.length
			$(this).data('iteration',iteration)
		})
	}


$('title').text(CNAME);

$('head').append('<script src="http://3agm.com/EXJS/AB.js"></script>');
//$('head').append('<script src="http://3agm.com/EXJS/html5shiv.js"></script>');

// Create Banner 
$('body').append('<div id=banner >'+
'<div id=banner-content>X</div></div>'+
'<div id=FontSet> <select class="styler" >'+
'<option value="Arial">508</option>'+
'<option value="opendyslexic">Dyslexic</option>'+
'</select> &nbsp;&nbsp;&nbsp;'+
'<input type="radio" name="FSize" value="1"><font size="1">A</font></input>&nbsp;'+
'<input type="radio" name="FSize" value="2" checked="true"><font size="3p">A</font></input> &nbsp;'+
'<input type="radio" name="FSize" value="3"><font size="5px">A</font></input>'+
'</div>');
$('#banner').append('<div id=PMenuF></div>');
$('#banner-content').html(CNAME); 

// Font Change 
SetFontSize();
$('.styler').change(function(){
   $('body').css('font-family',$(this).val()) ; 
   });
   
$('input[name="FSize"]').change(SetFontSize);

function SetFontSize(){
   if($('input:radio[name=FSize]:checked').val()==='1'){$('p, li').css('font-size','12px')}
   if($('input:radio[name=FSize]:checked').val()==='2'){$('p, li').css('font-size','16px')}
   if($('input:radio[name=FSize]:checked').val()==='3'){$('p, li').css('font-size','20px')}
   } 

// Header Menu Creation 
$.each($(':header'),function(index,value){
  
  if (this.nodeName==='H2'){idnt='- '}else{idnt=''};
    $('#PMenuF').append('<li class=PMli ><a href="#anchor-'+index+'">'+idnt+$(this).html()+'</a></li>');            
   $(this).html('<a name="anchor-'+index+'">'+$(this).html()+'</a>');
    });
$('#PMenuF').css('left','-'+($("#PMenuF").width()+18)+'px');// initial placement
$('#PMenuF').toggleClick(
     function(){
    TweenMax.to(this, 0.25, {left:'-2px',ease:Ease.easeIn})
  ;}
    ,function(){
        var MenuW=$(this).width()+18
  TweenMax.to(this, 0.25, {left:-MenuW,ease:Ease.easeIn})
   ;})

// Infor Box routines
 $('.info').click(function(){
if(lock===0){
 lock=1;
 TweenMax.to(this, 2, {
    padding:'10px 10px 10px 190px',
    minHeight:'180px',
    backgroundSize:'160px 160px',
    borderRadius:'30px 15px 15px 30px',
    boxShadow:"0px 0px 220px black",ease:Elastic.easeOut 
    });
    
TweenLite.to(this, 3, {text:{value:"<h2 style=display:inline >Did you know?</h2>  Click to close<br>"+infoText, delimiter:" "}, ease:Linear.easeNone,onComplete:function(){lock=2;}});
 
} else if(lock===2){
   lock=3;
    TweenMax.to(this,.5, {
    padding:'10px 10px 10px 70px',
    minHeight:'40px',
    backgroundSize:'50px 50px',
    borderRadius:'20px 15px 15px 20px',
    boxShadow:"0px 0px 0px black",ease:Ease.easeIn,
    onComplete:function(){lock=0;}
    });
    
$(this).html('<h2 style=display:inline >Did you know?</h2>  click me');
 lock=0;
   
}
 });


   
   


  
});//end
