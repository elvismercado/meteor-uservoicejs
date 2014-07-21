// Include the UserVoice JavaScript SDK (only needed once on a page)
UserVoice = [];

UserVoice.push = function() {
	console.log("UserVoice code is not loaded yet.");
};


load = function(d,s,u,c,t) {
	var uv=d.createElement(t);
	uv.type='text/javascript';
	uv.async=true;
	uv.src=u + c;
	var s=d.getElementsByTagName(t)[0];
	s.parentNode.insertBefore(uv,s)
};

if(Meteor.settings && Meteor.settings.public !== undefined && Meteor.settings.public.uservoice !== undefined && Meteor.settings.public.uservoice.code !== undefined) {

	var code = Meteor.settings.public.uservoice.code;
	load(document,'script','//widget.uservoice.com/',code);
	if (UserVoice.remove) {
		console.log("Found uservoice");
	}
} else {
	console.log("public.uservoice.code has not been set in your settings.json file.");
}