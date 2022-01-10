var captchaUrl = "/api/ggfw-hot-center/hot/render";
var getInfoUrl = "/api/ggfw-hot-center/hot/proGov/getProGovernInfo";
var getEugenicUrl = "/api/ggfw-hot-center/hot/eugenic/getEugenicInfo";
var getEugenicResultUrl = "/api/ggfw-hot-center/hot/eugenic/getEugenicInfoResult";
var getGwySearchInfoUrl = "/api/ggfw-hot-center/hot/gwySearchInfo/getGwySearchInfo";
var getGwyaaaaUrl = "/api/ggfw-hot-center/hot/gwySearchInfo/getGwySearchInfoTest";

function commonRequestNoData(url, callBack) {
    $.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        url: url,
        success: function (data, textStatus, jqXHR) {
            if (data.appcode == "0") {
                callBack(data);
            } else {
                alert(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            returnJudgement(jqXHR);
        }
    });
}

function commonRequest(url, formdata, callBack) {
    $.ajax({
        type: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        url: url,
        data: JSON.stringify(formdata),
        success: function (data, textStatus, jqXHR) {
            if (data.appcode == "0") {
                callBack(data);
            } else {
                alert(data.msg);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            returnJudgement(jqXHR);
        }
    });
}

function returnJudgement(jqXHR) {
    if (jqXHR.status == 401) {
        alert("您的请求出现错误，请稍后再试");
    } else {
        var response = jqXHR.responseJSON;
        if (response != null && response != undefined && response.appcode != "0") {
            alert(response.message == undefined ? response.msg : (response.status + ":" + response.message));
        } else {
            alert("您的请求出现错误，请稍后再试");
        }
    }
}

function setFormData(data, id) {
    $.each(data, function (k, v) {
        if ((v && v.length > 0) || typeof v == 'number') {
            var e = $("#" + id + " [name=" + k + "]");
            var value = v;
            if (e.is("div") || e.is("h1") || e.is("span") || e.is("td")) {
                e.html(value);
            } else {
                e.val(value);
            }
        }
    })
}