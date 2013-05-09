		$(document).ready(function(){
    		
    		var counter = 0;
    		var matchedCards = 0;
    		var cardArray = ['yinyang', 'heart', 'star', 'smiley', 'peace', 'crescent', 'target', 'swirl'];
    		
    		$('.click').click( function() {
        		$(this).toggleClass('flip');
        		counter++;
    			console.log(counter);
    			
    			// if two cards have been flipped:
        		if (counter == 2) {
        		
        		// the following code checks to see if any matching pairs have been selected:
        		
        			if($("#yinyang-01").hasClass("flip") && $("#yinyang-02").hasClass("flip") && $("#yinyang-02").hasClass("click") && $("#yinyang-01").hasClass("click")){
        				console.log("you got both yin yangs!");
    					$("#yinyang-01").removeClass('click');
    					$("#yinyang-02").removeClass('click');
    					$("#yinyang-01").addClass('moveToPile');
    					$("#yinyang-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#heart-01").hasClass("flip") && $("#heart-02").hasClass("flip") && $("#heart-01").hasClass("click") && $("#heart-02").hasClass("click")){
        				console.log("you got both hearts!");
    					$("#heart-01").removeClass('click');
    					$("#heart-02").removeClass('click');
    					$("#heart-01").addClass('moveToPile');
    					$("#heart-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#star-01").hasClass("flip") && $("#star-02").hasClass("flip") && $("#star-01").hasClass("click") && $("#star-02").hasClass("click")){
        				console.log("you got both stars!");
    					$("#star-01").removeClass('click');
    					$("#star-02").removeClass('click');
    					$("#star-01").addClass('moveToPile');
    					$("#star-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#smiley-01").hasClass("flip") && $("#smiley-02").hasClass("flip") && $("#smiley-01").hasClass("click") && $("#smiley-02").hasClass("click")){
        				console.log("you got both smileys!");
    					$("#smiley-01").removeClass('click');
    					$("#smiley-02").removeClass('click');
    					$("#smiley-01").addClass('moveToPile');
    					$("#smiley-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#peace-01").hasClass("flip") && $("#peace-02").hasClass("flip") && $("#peace-01").hasClass("click") && $("#peace-02").hasClass("click")){
        				console.log("you got both peace signs!");
    					$("#peace-01").removeClass('click');
    					$("#peace-02").removeClass('click');
    					$("#peace-01").addClass('moveToPile');
    					$("#peace-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#crescent-01").hasClass("flip") && $("#crescent-02").hasClass("flip") && $("#crescent-01").hasClass("click") && $("#crescent-02").hasClass("click")){
        				console.log("you got both crescents!");
    					$("#crescent-01").removeClass('click');
    					$("#crescent-02").removeClass('click');
    					$("#crescent-01").addClass('moveToPile');
    					$("#crescent-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#target-01").hasClass("flip") && $("#target-02").hasClass("flip") && $("#target-01").hasClass("click") && $("#target-02").hasClass("click")){
        				console.log("you got both targets!");
    					$("#target-01").removeClass('click');
    					$("#target-02").removeClass('click');
    					$("#target-01").addClass('moveToPile');
    					$("#target-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
        		
        			else if($("#swirl-01").hasClass("flip") && $("#swirl-02").hasClass("flip") && $("#swirl-01").hasClass("click") && $("#swirl-02").hasClass("click")){
        				console.log("you got both swirls!");
    					$("#swirl-01").removeClass('click');
    					$("#swirl-02").removeClass('click');
    					$("#swirl-01").addClass('moveToPile');
    					$("#swirl-02").addClass('moveToPile');
        				
        				matchedCards++;
        				console.log(matchedCards);
		
						if(matchedCards == 8) {
							console.log("Congratulations! You matched all the cards!");
      						$('#congratulations').fadeIn('slow', function() {
      						});
						}
						
    					counter = 0;
    					console.log(counter);
    				}
    				
    				// if none of the matching pairs have been selected, flip all the cards back:
    				else {
    					console.log("try again!");
    					
    					if($("#yinyang-02").hasClass("click") && $("#yinyang-01").hasClass("click")){
    						setTimeout(function() {
    							$("#yinyang-01").removeClass('flip');
							}, 600);
    						setTimeout(function() {
    							$("#yinyang-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#heart-01").hasClass("click") && $("#heart-02").hasClass("click")){
    						setTimeout(function() {
    							$("#heart-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#heart-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#star-01").hasClass("click") && $("#star-02").hasClass("click")){
    						setTimeout(function() {
    							$("#star-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#star-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#smiley-01").hasClass("click") && $("#smiley-02").hasClass("click")){
    						setTimeout(function() {
    							$("#smiley-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#smiley-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#peace-01").hasClass("click") && $("#peace-02").hasClass("click")){
    						setTimeout(function() {
    							$("#peace-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#peace-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#crescent-01").hasClass("click") && $("#crescent-02").hasClass("click")){
    						setTimeout(function() {
    							$("#crescent-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#crescent-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#target-01").hasClass("click") && $("#target-02").hasClass("click")){
    						setTimeout(function() {
    							$("#target-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#target-02").removeClass('flip');
    						}, 600);
    					}
    					
    					if($("#swirl-01").hasClass("click") && $("#swirl-02").hasClass("click")){
    						setTimeout(function() {
    							$("#swirl-01").removeClass('flip');
    						}, 600);
    						setTimeout(function() {
    							$("#swirl-02").removeClass('flip');
    						}, 600);
    					}
    					
    					counter = 0;
    				}
    				
        		}
    		});
		
		});