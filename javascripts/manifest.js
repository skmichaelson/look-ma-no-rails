window.SarahWebsite = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		new SarahWebsite.Routers.Contents({
			"$rootEl": $("main")
		});

		Backbone.history.start();
	}
};

$(document).ready(function() {
	SarahWebsite.initialize();
});