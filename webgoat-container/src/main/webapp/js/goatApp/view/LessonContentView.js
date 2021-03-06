//LessonContentView
define(['jquery',
	'underscore',
	'backbone',
	'libs/jquery.form',
	'goatApp/model/LessonContentData'], 
function($,_,Backbone,JQueryForm,LessonData) {
	return Backbone.View.extend({
		el:'#lesson-content-wrapper', //TODO << get this fixed up in DOM
		initialize: function(options) {
			options = options || {};
		},
		render: function() {
			this.$el.html(this.model.get('content'));
			this.makeFormsAjax();
		},
		//TODO: reimplement this in custom fashion maybe?
		makeFormsAjax: function () {
			var options = {
			    //target: '#lesson_content', // target element(s) to be updated with server response                     
			    //beforeSubmit: GoatUtils.showRequest, // pre-submit callback, comment out after debugging 
			    //success: GoatUtils.showResponse  // post-submit callback, comment out after debugging 
			    success:this.reLoadView.bind(this),
			    url:'attack?Screen=' + this.model.get('screenParam') + '&menu=' + this.model.get('menuParam'),
			    type:'GET'
	            // $.ajax options can be used here too, for example: 
	            //timeout:   3000 
			};
			//hook forms //TODO: clarify form selectors later
		    $("form").ajaxForm(options);
        },
        reLoadView: function(content) {
        	this.model.setContent(content);
        	this.render();
        }
	});

	
});