
$(document).ready(function() {
    OFFERING_URL = "https://docs.google.com/forms/d/1166FEaPqa3HxAe2Jmuu2lnuFtYiihS7BjLZd903wAnQ/viewform?entry.912152326&entry.1860647921=I'm+offering+a+room&entry.835831600&entry.1311727525&entry.759778517&entry.179170619&entry.948094200"

    LOOKING_URL = "https://docs.google.com/forms/d/1166FEaPqa3HxAe2Jmuu2lnuFtYiihS7BjLZd903wAnQ/viewform?entry.912152326&entry.1860647921=I'm+looking+for+a+room&entry.1860647921=I'm+looking+for+a+roommate+with+whom+to+rent+an+apartment&entry.835831600&entry.1311727525&entry.759778517&entry.179170619&entry.948094200"
    
    var hash = window.location.hash.substring(1);
    if (hash === "looking") {
	console.log("looking");
	$("#housing-form").attr('src', LOOKING_URL);
    } else {
	console.log("offering");
	$("#housing-form").attr('src', OFFERING_URL);
    }
});
