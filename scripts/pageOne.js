define(["jQuery", "Handlebars", "text!templates/pageOne.html", "text!templates/subPage.html"], function($, Handlebars, template, subPageTemplate) {

    // here we compile the two templates we will use, so that later we just need to fill them with dynamic values
    var fillTemplate = Handlebars.compile(template);
    var fillSubPageTemplate = Handlebars.compile(subPageTemplate);

    function render(eventName) {
        // create the whole page and put it into the DOM
        var values = {
            fillMe: "Ivano"
        };
        $("body").html(fillTemplate(values));
        // fill the list of links and put each of them into the DOM
        var linkValues = {
            linkUrl: "http://www.di.univaq.it/malavolta",
        };
        // linksContainer is saved in a local variable because each jquery call is very costly in terms of performance
        var linksContainer = $("#linksContainer");
        for(var i=0; i<5; i++) {
            linkValues.urlName = "link" + i;
            linksContainer.append(fillSubPageTemplate(linkValues));
        }
        // here we require the GMaps library and then we show the map
        require(["async!http://maps.googleapis.com/maps/api/js?key=AIzaSyAdSD7v00gUN3yuCLc1TBbI9Nl1gJfma8U&sensor=true!callback"], function() {
            var myOptions = {
                center: new google.maps.LatLng(51.538, -0.142),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true
            };
            var mapCanvas = this.$("#map");
            // the map must have static dimensions (that is, you cannot use percentages here)
            mapCanvas.css({
                "width": $(document).width() + "px",
                "height": $(document).height() + "px"
            });
            var map = new google.maps.Map(document.getElementById(mapCanvas.attr("id")), myOptions);
            google.maps.event.trigger(map, 'resize');
        });
    }

    return {
        render: render
    }
});