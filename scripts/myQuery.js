//Tyler Kness - Miller
//March 11, 2019
//INFO 2220
//Jon Holmes
//Assignment 7
//Purpose: This is script file to test code written using jQuery.

//Document Ready Function
$(document).ready(function () {
    //Click functions for spnOne

    //Function that Sets the Text of the span.
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });

    //Function that appends text to the span.
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append("== Text at the back");
    });

    //Function that prepends text to the span.
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front --");
    });

    //Function that adds text before the span.
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++");
    });

    //Function that adds text after the span.
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after("@@ Text After");
    });

    //Function that shows the contents of the span.
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });

    //Function that adds a number to each of the number tags.
    $("#btnNumberPs").click(function () {
        var p = $("#divNumbers p");
        for (var i = 0; i < p.length; i++) {
            $("#divNumbers p").eq(i).prepend((i + 1) + ". ");
        }
    });

    //Function that adds the success class to relevant p tags.
    $("#btnClassPSuccess").click(function () {
        var s = $("#divClass p");
        
        for (var i = 0; i < s.length; i++) {
            $("#divClass p").eq(i).removeClass();
            $("#divClass p").eq(i).addClass("success");
        }
    });

    //Function that removes the success class and adds the error class.
    $("#btnClassPError").click(function () {
        var s = $("#divClass p");

        for (var i = 0; i < s.length; i++) {
            if (i % 2 == 0) {
                $("#divClass p").eq(i).removeClass("success");
                $("#divClass p").eq(i).addClass("error");
            }
        }
    });

    //Function that removes all classes and adds the warning class.
    $("#btnClassPWarning").click(function () {
        var s = $("#divClass p");

        for (var i = 0; i < s.length; i++) {
            $("#divClass p").eq(i).removeClass();
            $("#divClass p").eq(i).addClass("warning");
        }
    });

    //Function that adds elements with text before and after certain elements.
    $("#btnAddLastNames").click(function () {
        var strong = $("<strong></strong>").text(" Flintstone ");
        $(".bff").before(strong);

        var em = $("<em></em>").text(" Rubble ");
        $(".bff").append(em);

        var del = $("<del></del>").text(" Dinosaur ");
        $(".bff").next().after(del);
    });

    //Function that detaches the Larry without removing all of the data inside it.
    $("#btnRemoveLarry").click(function () {
        $(".first").detach();
    });

    //Function that clears the contents of the Curly LI
    $("#btnClearCurly").click(function () {
        $(".second").empty();
    });

    //Function that clears the last name of the Moe element.
    $("#btnRemoveMoeLastName").click(function () {
        $(".third").find("span").remove();
    });

    //Function that clears the last name of the Shemp element.
    $("#btnRemoveShempLastName").click(function () {
        $(".third").next().find("span").remove();
    });

    //Function that chages the text of a particular span.
    $("#btnChangeText").click(function () {
        document.getElementById("spnTwo").parentElement.nextElementSibling.children[1].innerHTML = "I was changed";
        //I could not figure it out using jQuery, but I did get it working with good ol JavaScript.
        //$("#spnTwo").parent.next().children()[1].text("I was changed");
    });


    var counter = 0;
    //Function that toggles all p elements' visibility on the page.
    $("#btnTogglePs").click(function () {
        if (counter % 2 == 0) {
            $("#btnTogglePs").text("Show all Ps");
            $("p").hide();
        }
        else {
            $("#btnTogglePs").text("Hide all Ps");
            $("p").show();
        }
        counter++;
    });
});