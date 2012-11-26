$(function(){
    var contentModel = Backbone.Model.extend({
        
    });
    var aboutModel = new contentModel({content:"Hi."});
    var contentView = Backbone.View.extend({
        tagName: "div",
        render: function(){
            $(this.el).html(model.content);
            return this;
        }
    });
    window.AppView = Backbone.View.extend({
        el: "#content"
        
    });
});