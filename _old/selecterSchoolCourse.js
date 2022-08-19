// 学校名の値と、それに対応するコース一覧を格納 [1]
const courseName = 
{
    "八王子西特別支援学校": ["陣馬コース", "石川コース", "川口コース", "大和田コース"],
    "あきる野学園": ["東中神コース", "檜原コース", "昭島コース", "新五日市コース", "拝島コース", "武蔵増戸コース", "急行檜原コース"],
    "七生特別支援学校": ["日野駅コース", "万願寺コース"],
    "青峰学園": ["二俣尾コース", "西コース"],
    "八王子盲学校": ["昭島コース"],
    "羽村特別支援学校": ["旧青梅コース", "友愛コース", "成木コース", "東大和コース", "羽村コース", "武蔵村山コース", "御岳コース", "奥多摩コース", "青梅コース", "立川コース", "新青梅街道コース", "福生コース"/*, "瑞穂コース"*/],
    "村山特別支援学校": ["立川諏訪コース", "青梅橋コース", "昭和公園コース", "江戸街道コース", "多摩川コース", "モノレールコース"],
    "武蔵台学園": ["国立コース", "立川南コース"/*, "滝乃川コース", "立川北コース", "国分寺コース"*/],
    "田無特別支援学校": ["西東京コース", "小平コース"],
    "清瀬特別支援学校": ["富士見町コース", "東村山コース"],
    "立川学園": ["西砂コース"],
    "小金井特別支援学校": ["小平コース"],
    "小平特別支援学校": ["こぶしコース"],
    "光明学園": ["仙川コース"]
};

// 選択された学校名を受け取って処理 [4]
const setCourseOptions = function(selectedSchool){
    const selectCourseName = document.getElementById('course'); //2つ目のセレクトボックスを取得
    var element = document.getElementById('course');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    selectCourseName.disabled = false; //選択可能な状態にする

    //選択された学校名のコース一覧に対して処理をする
    courseName[selectedSchool].forEach((menu, index) => {
        const option = document.createElement('option'); //option要素を新しく作る
        option.value = index; //option要素の値に、コースを識別できる番号を指定する
        option.innerHTML = menu; //ユーザー向けの表示としてメニュー名を指定する
        selectCourseName.appendChild(option); //セレクトボックスにoption要素を追加する
    });
}

// 学校名を選ぶためのセレクトボックスを指定 [2]
const schoolSelect = document.getElementById('school');

// 学校名が選択されたら（change）、処理を行う [3]
schoolSelect.addEventListener('change', (e) => {
    /******************************************
    選択された学校名を引数として関数に渡す
    ※e.target.valueはschoolSelectで選択された値
    ******************************************/
    setCourseOptions(e.target.value);
})