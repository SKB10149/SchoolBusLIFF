function nowDateTime() {
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0"+(today.getMonth()+1)).slice(-2);
    var dd = ("0"+today.getDate()).slice(-2);
    var HH = ("0"+today.getHours());
    var MM = ("0"+today.getMinutes());
    var SS = ("0"+today.getSeconds());
    document.getElementById("nowDateTime").value=yyyy+'/'+mm+'/'+dd+' '+HH+':'+MM+':'+SS;
}