

$(".check_you").click(function () {
    $("#you").prop("checked", true);
    $(".check_you").addClass("active");
    $(".check_both").removeClass("active");
});
$(".check_both").click(function () {
    $("#both").prop("checked", true);
    $(".check_both").addClass("active");
    $(".check_you").removeClass("active");
});