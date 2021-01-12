$(document).ready(function () {
    $.ajax({
        url: '../data/MOCK_DATA.json',
        dataType: 'json',
        success: showContent,
        error: function (result) {
            console.log('에러:' + result.statusText);
        }
    });
    //button 클릭 이벤트
    $('btn').on('click'), function () {
        $('input:checkbox').parent().parent().remove();
    };
    //all_check 클릭 이벤트. (라이브이벤트방식)
    $('body').on('click','#all_check',function() {
        console.log('checked');
        //$('td>input').prop('checked, $('#all_check').is(':checked'))
        if($('#all_check').is(':checked'))
        $('td>input').attr('checked','true');
        else
        $('td>input').prop('checked','false');
    })
});

function showContent(result) {
    let headers = ['chkbox', 'id', 'first_name', 'last_name', 'email'];
    let data = result;
    let table = $('<table id ="tbl"/>').attr('border', '1');
    let titles = $('<tr />');

    for (field of headers) {
        let td;
        if (field == 'chkbox') {
            let chkbox = $('<input />').attr('type', 'checkbox').attr('id','all_check');
            td = $('<th />').append(chkbox);
            td.attr('width', '45px');
        } else {
            td = $('<th />').html((field).toUpperCase());
        }
        td.css('height', '40px');
        titles.append(td);

    }
    table.append(titles);

    $(data).each(function (idx, obj) {
        if (idx < 5) {
            let tr = $('<tr />');
            $(tr).attr('id', obj.id);
            $(tr).hover(function() {
                    $(this).css('background-color', 'yellow')
                },
                function () {
                    $(this).css('background-color', '')
            });

            for (field of headers) {
                let td = $('<td />');
                if (field == 'chkbox') {
                    let checkbox = $('<input />')
                        .attr('type', 'checkbox')
                    td.attr('align', 'center');
                    td.append(checkbox);
                } else {
                    td.html(obj[field]);
                }

                tr.append(td);
            }
            table.append(tr);
        }
    })
    $('#show').append(table);

    //  $('#all_check').on('click',function() {
    //      console.log('checked');
    //  })
}