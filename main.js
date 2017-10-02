var demo = new Vue({
	el: '#main',

	// define some data and properties

	data:{
		show_tooltip: false,
		text_content: 'Hello, world'

	},
	//
	methods: {

		toggleTooltip: function(){
			this.show_tooltip = !this.show_tooltip;
		},

		hideTooltip: function(){
			this.show_tooltip=false;
		}

	} 
});