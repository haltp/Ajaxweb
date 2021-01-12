$(document).ready(function () {
    //ajax 호출
    $.ajax({
        url: '../data/MOCK_DATA.json',
        dataType: 'json',
        success: showContent,
        error: function (result) {
            console.log('에러:' + result.statusText);
        }
    });
    //버튼이벤트
    $('#btn').click(addRow);
    //찾기 이벤트
    $('#findBtn').on('click', findRow);
});

function addRow() {
    let tr = makeNewTr();
    $('#tbl').append(tr);
}

function findRow() {
    let findId = $('#find_id').val();
    let findRow = $('#' + findId).css('background-color', 'gray');
    //신규 row 생성
    let tr = makeNewTr();
    findRow.after(tr);
}

function makeNewTr() {
    //console.log($('input[type]'));
    let inputs = $('.input_val');
    let tr = $('<tr />');
    $(tr).click(trToInputFunc);
    $(tr).hover(function () {
        $(this).css('background-color', 'yellow');
    }, function () {
        $(this).css('background-color', '');
    })
    for (let i = 0; i < inputs.length; i++) {
        let td = $('<td />').html(inputs[i].value);
        tr.append(td);
    }
    console.log("add");
    let button = $('<button />').html('삭제');
    $(button).click(deleteFunc);
    tr.append(button);
    $('#tbl').append(tr);

    return tr;

};

function btnFunc() {
    let lName = $('#last_name').val();
    let email = $('#email').val();
    let tr = $('<tr />');
    let tdId = $('<td />').html($('#id').val());
    let tdFirst = $('<td />').html($('#first_name').val());
    let tdLast = $('<td />').html(lName);
    let tdemail = $('<td />').html(email);
    $('#tbl').append($(tr).append(tdId, tdFirst, tdLast, tdemail));
}
function showContent(result) {
    let headers = ['id', 'first_name', 'last_name', 'email'];
    let data = result;
    let table = $('<table id ="tbl"/>').attr('border', '1');
    let titles = $('<tr />');
    for (field of headers) {

        let th = $('<th />').html((field).toUpperCase());
        titles.append(th);
    }
    table.append(titles);
    $(data).each(function (idx, obj) {
        if (idx < 5) {
            let tr = $('<tr />');
            $(tr).attr('id', obj.id);
            //-->tr event......
            $(tr).click(trToInputFunc); //1. click
            $(tr).mouseover(function () { //2. mouseover
                $(this).css('background-color', 'yellow');
            });
            $(tr).mouseout(function () {//3. mouseout
                $(this).css('background-color', '');
            });
            $(tr).on({
                'click': trToInputFunc,
                'mouseover': function () { 
                    $(this).css('background-color', 'yellow') 
                },
                'mouseout': function () { 
                    $(this).css('background-color', '') 
                }
            });
            //-->end
            for (field of headers) {
                let td = $('<td />').html(obj[field]);
                tr.append(td);
            }
            let button = $('<button />').html('삭제');
            $(button).click(deleteFunc);
            tr.append(button);
            table.append(tr);
        }
    })
    $('#show').append(table);
}

function trToInputFunc() {
    //console.log($(this).children().eq(0).html());
    $('#id').val($(this).children().eq(0).html());
    $('#first_name').val($(this).children().eq(1).html());
    $('#last_name').val($(this).children().eq(2).html());
    $('#email').val($(this).children().eq(3).html());
}
function deleteFunc() {
    $(this).parent().remove();
    console.log("remove");
};