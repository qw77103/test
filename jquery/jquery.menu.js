$(document).ready(function() {
    var oldtext = ['訊息中心', '分署簡介', '業務專區', '為民服務', '下載專區'];
    var newtext = ['Today', 'Success', 'Business', 'News', 'Career']

    //  讓 #menu 的寬度自動根據 main 的數量而變
    $("#menu").css("width", $(".main").length * 100)
        //  一進入畫面時收合選單
    $(".sub").slideUp(0);

    for (i = 0; i < $(".main").length; i++) {
        //  點選按扭時收合或展開選單
        $(".main:eq(" + i + ")").on("mouseover", {
            id: i
        }, function(e) {
            n = e.data.id
            $(".sub:eq(" + n + ")").slideToggle()
            $(".sub:not(:eq(" + n + "))").slideUp()
            $(".main:eq(" + n + ")").text(newtext[n])
        })
        $(".main:eq(" + i + ")").on("mouseleave", {
            id: i
        }, function(e) {
            n = e.data.id
            $(".main:eq(" + n + ")").text(oldtext[n])
            $(".sub").stop();
        })
    }
})