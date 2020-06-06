window.onscroll = function() {scrollFunc()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function scrollFunc() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function projectDescriptionOn(id){
    var str = id;
    //            alert(str.indexOf("name-project"));
    //            if (str.indexOf("name-project") == -1){
    //                var im = document.getElementById(id);
    //                var d = document.getElementById("description" + id);
    //            }
    //            else{
    //                var d = document.getElementById("descriptionproject" + str.substr("name-project".length));
    //                var im = document.getElementById("project" + str.substr("name-project".length));
    //            }
    d = document.getElementById("description" + id);
    d.style.display = "block";
}

function projectDescriptionOff(id){
    //            alert("in");
    //            var str = id;
    //            if (str.indexOf("description") == -1){
    //                var im = document.getElementById(id);
    //                var d = document.getElementById("description" + id);
    //            }
    //            else{
    //                var d = document.getElementById(id);
    //                var im = document.getElementById(substr(str.indexOf("description")));
    //            }
    //            d = document.getElementById("description" + id);
    d.style.display = "none";
}


function openProjectDescription(id){
    //            alert("in");
    var str = id;
    if(str.indexOf("project1") != -1){
        var modal = document.getElementById("project1-modal");
        var span = document.getElementById("close1");
        modal.style.display = "block";
    }
    else{
        var modal = document.getElementById("project2-modal");
        var span = document.getElementById("close2");
        modal.style.display = "block";
    }
    span.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
