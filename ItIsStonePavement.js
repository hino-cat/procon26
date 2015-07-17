var guestselect = document.getElementById("questselect");
//ダイアログでファイルが選択された時
questselect.addEventListener("change",function(evt){
  var file = evt.target.files;
  //このコメントを抜くとなぜか動かなくなるので消さないように
  
  //FileReaderの作成
  var reader = new FileReader();
  //テキスト形式で読み込む
  reader.readAsText(file[0]);
  
  
  //読込終了後の処理
  reader.onload = function(ev){
    //テキストエリアに表示する
    document.fileSelect.txt.value = reader.result;
    
  }
},false);