$( document ).ready(function() {

    // Your code here.


    var stupidButton = {
    	init: function() {
    		this.attachEvents();
    	},

    	attachEvents: function() {
    		$('#runawaycontainer').on('mouseover', this.flyAway);
    		$('#runaway').on('click', this.showWin);
    	},

    	flyAway: function(e) {
    		mLeft = Math.random() * 300;
    		mTop = Math.random() * 300;

    		$('#runawaycontainer').css('margin-left', mLeft);
    		$('#runawaycontainer').css('margin-top', mTop);
    	},

    	showWin: function(e) {
    		alert('No, it is a really bad idea');
    	}
    };

    stupidButton.init();

});
