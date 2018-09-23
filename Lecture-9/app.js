// IIFE

// Immediately Invoked Function Expression


var moduleA = (function(){
    // Private Specifier 
    var globalObj = {};
	function greet(data) { 
		return "Hello " + data;
	}

	function Invite(data) {
		return "Invitation sent with "  + greet(data); 
	}

	globalObj.Invitation = Invite;
	return globalObj; // Public Specifier for Module globalObj
    
})();
