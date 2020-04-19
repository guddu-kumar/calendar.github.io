 

$(document).ready(function () {
 $(function() {
            $("#wizard1").simpleWizard({
                cssClassStepActive: "active",
                cssClassStepDone: "done",
                onFinish: function() {
                    //  alert("Wizard finished")
                }
            });
        });

// radio button click js

 $(".select_you").click(function () {
    $("#you").prop("checked", true);
    $(".select_you").addClass("active");
    $(".select_both").removeClass("active");
});

$(".select_both").click(function () {
    $("#both").prop("checked", true);
    $(".select_both").addClass("active");
    $(".select_you").removeClass("active");
});

// Gender radio
$(".select_male").click(function () {
    $("#male").prop("checked", true);
    $(".select_male").addClass("active");
    $(".select_female").removeClass("active");
});

$(".select_female").click(function () {
    $("#female").prop("checked", true);
    $(".select_female").addClass("active");
    $(".select_male").removeClass("active");
});
// age radio
$(".select_Under_30").click(function () {
    $("#under_30").prop("checked", true);
    $(".select_Under_30").addClass("active");
    $(".select_30_44").removeClass("active");
    $(".select_Above_45").removeClass("active");
});

$(".select_30_44").click(function () {
    $("#under_40").prop("checked", true);
    $(".select_30_44").addClass("active");
    $(".select_Above_45").removeClass("active");
    $(".select_Under_30").removeClass("active");
});

$(".select_Above_45").click(function () {
    $("#above_45").prop("checked", true);
    $(".select_Above_45").addClass("active");
    $(".select_Under_30").removeClass("active");
    $(".select_30_44").removeClass("active");
});

// current mattress radio 
$(".select_soft").click(function () {
    $("#soft").prop("checked", true);
    $(".select_soft").addClass("active");
    $(".select_meduim").removeClass("active");
    $(".select_firm").removeClass("active");
});

$(".select_meduim").click(function () {
    $("#meduim").prop("checked", true);
    $(".select_meduim").addClass("active");
    $(".select_firm").removeClass("active");
    $(".select_soft").removeClass("active");
});
$(".select_firm").click(function () {
    $("#firm").prop("checked", true);
    $(".select_firm").addClass("active");
    $(".select_soft").removeClass("active");
    $(".select_meduim").removeClass("active");
});
// preferred mattress radio 
$(".select_softer").click(function () {
    $("#softer").prop("checked", true);
    $(".select_softer").addClass("active");
    $(".select_meduim").removeClass("active");
    $(".select_firmer").removeClass("active");
});

$(".select_similar").click(function () {
    $("#similar").prop("checked", true);
    $(".select_similar").addClass("active");
    $(".select_firmer").removeClass("active");
    $(".select_softer").removeClass("active");
});

$(".select_firmer").click(function () {
    $("#firmer").prop("checked", true);
    $(".select_firmer").addClass("active");
    $(".select_softer").removeClass("active");
    $(".select_similar").removeClass("active");
});
// male Fall Asleep
$(".select_back").click(function () {
    $("#back").prop("checked", true);
    $(".select_back").addClass("active");
    $(".select_side").removeClass("active");
    $(".select_stomach").removeClass("active");
    $(".select_mix").removeClass("active");
});

$(".select_side").click(function () {
    $("#side").prop("checked", true);
    $(".select_side").addClass("active");
    $(".select_stomach").removeClass("active");
    $(".select_mix").removeClass("active");
    $(".select_back").removeClass("active");
   
});

$(".select_stomach").click(function () {
    $("#stomach").prop("checked", true);
    $(".select_stomach").addClass("active");
    $(".select_mix").removeClass("active");
    $(".select_back").removeClass("active");
    $(".select_side").removeClass("active");
   
});

$(".select_mix").click(function () {
    $("#mix").prop("checked", true);
    $(".select_mix").addClass("active");
    $(".select_back").removeClass("active");
    $(".select_side").removeClass("active");
    $(".select_stomach").removeClass("active");
   
});

// female Fall Asleep
$(".select_female_back").click(function () {
    $("#female_back").prop("checked", true);
    $(".select_female_back").addClass("active");
    $(".select_female_side").removeClass("active");
    $(".select_female_stomach").removeClass("active");
    $(".select_female_mix").removeClass("active");
});

$(".select_female_side").click(function () {
    $("#female_side").prop("checked", true);
    $(".select_female_side").addClass("active");
    $(".select_female_stomach").removeClass("active");
    $(".select_female_mix").removeClass("active");
    $(".select_female_back").removeClass("active");
   
});

$(".select_female_stomach").click(function () {
    $("#female_stomach").prop("checked", true);
    $(".select_female_stomach").addClass("active");
    $(".select_female_mix").removeClass("active");
    $(".select_female_back").removeClass("active");
    $(".select_female_side").removeClass("active");
   
});

$(".select_female_mix").click(function () {
    $("#female_mix").prop("checked", true);
    $(".select_female_mix").addClass("active");
    $(".select_female_back").removeClass("active");
    $(".select_female_side").removeClass("active");
    $(".select_female_stomach").removeClass("active");
   
});

// male Discomfort radio
$(".select_male_shoulder").click(function () {
    $("#male_shoulder").prop("checked", true);
    $(".select_male_shoulder").addClass("active");
    $(".select_male_upperback").removeClass("active");
    $(".select_male_lowerback").removeClass("active");
    $(".select_male_pelvic_hips").removeClass("active");
    $(".select_male_none").removeClass("active");
});

$(".select_male_upperback").click(function () {
    $("#male_upperback").prop("checked", true);
    $(".select_male_upperback").addClass("active");
    $(".select_male_lowerback").removeClass("active");
    $(".select_male_pelvic_hips").removeClass("active");
    $(".select_male_none").removeClass("active");
    $(".select_male_shoulder").removeClass("active");
   
});

$(".select_male_lowerback").click(function () {
    $("#male_lowerback").prop("checked", true);
    $(".select_male_lowerback").addClass("active");
    $(".select_male_pelvic_hips").removeClass("active");
    $(".select_male_none").removeClass("active");
    $(".select_male_shoulder").removeClass("active");
    $(".select_male_upperback").removeClass("active");
   
});

$(".select_male_pelvic_hips").click(function () {
    $("#male_pelvic_hips").prop("checked", true);
    $(".select_male_pelvic_hips").addClass("active");
    $(".select_male_none").removeClass("active");
    $(".select_male_shoulder").removeClass("active");
    $(".select_male_upperback").removeClass("active");
    $(".select_male_lowerback").removeClass("active");
   
});

$(".select_male_none").click(function () {
    $("#male_none").prop("checked", true);
    $(".select_male_none").addClass("active");
    $(".select_male_shoulder").removeClass("active");
    $(".select_male_upperback").removeClass("active");
    $(".select_male_lowerback").removeClass("active");
    $(".select_male_pelvic_hips").removeClass("active");
   
});


// female Discomfort radio
$(".select_female_shoulder").click(function () {
    $("#female_shoulder").prop("checked", true);
    $(".select_female_shoulder").addClass("active");
    $(".select_female_upperback").removeClass("active");
    $(".select_female_lowerback").removeClass("active");
    $(".select_female_pelvic_hips").removeClass("active");
    $(".select_female_none").removeClass("active");
});

$(".select_female_upperback").click(function () {
    $("#female_upperback").prop("checked", true);
    $(".select_female_upperback").addClass("active");
    $(".select_female_lowerback").removeClass("active");
    $(".select_female_pelvic_hips").removeClass("active");
    $(".select_female_none").removeClass("active");
    $(".select_female_shoulder").removeClass("active");
   
});

$(".select_female_lowerback").click(function () {
    $("#female_lowerback").prop("checked", true);
    $(".select_female_lowerback").addClass("active");
    $(".select_female_pelvic_hips").removeClass("active");
    $(".select_female_none").removeClass("active");
    $(".select_female_shoulder").removeClass("active");
    $(".select_female_upperback").removeClass("active");
   
});

$(".select_female_pelvic_hips").click(function () {
    $("#female_pelvic_hips").prop("checked", true);
    $(".select_female_pelvic_hips").addClass("active");
    $(".select_female_none").removeClass("active");
    $(".select_female_shoulder").removeClass("active");
    $(".select_female_upperback").removeClass("active");
    $(".select_female_lowerback").removeClass("active");
   
});

$(".select_female_none").click(function () {
    $("#female_none").prop("checked", true);
    $(".select_female_none").addClass("active");
    $(".select_female_shoulder").removeClass("active");
    $(".select_female_upperback").removeClass("active");
    $(".select_female_lowerback").removeClass("active");
    $(".select_female_pelvic_hips").removeClass("active");
   
});

var $owl = $('#male_silhouette_slider, #female_silhouette_slider');

$owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: false,
    items: 5,
});

$(document).on('click', '.owl-item>div', function () {
    $owl.trigger('to.owl.carousel', $(this).data('position'));
});









});
