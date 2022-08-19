// ウェブアプリのURL
const endpoint = "https://script.google.com/macros/s/AKfycbxerxmNFJYF5sf-mHZYDKL7N1XqwwLtL0K_z5qwiS5uV6VQmrOpYsd8TMvMebag4bJB/exec";

function getSheetData(){
    $.ajax({
        type: 'GET',
        url: endpoint,
        dataType: 'jsonp',
        data: {
            sheet: 'シート1',     //シート名指定
            range: 'A1:A10'       //範囲指定　指定がない場合はすべて読み込む
        },
    })
    .done(function(out){
        //受け取ったデータをここで処理する
        console.log(out.data);

    })
    .fail(function() {
        //エラー時の処理を書く
        console.log('エラー');            
    })
    
}
//実行してみる
getSheetData()