function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('QRcode簽到點名系統');
}


/**
 * 取得登入者資訊
 */
function getUserInfo() {

  const email = Session.getActiveUser().getEmail();

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName("User");

  const data = sh.getDataRange().getValues();

  for(let i=1;i<data.length;i++){

    if(data[i][2].toString().trim().toLowerCase() ==
       email.toLowerCase()){

      return {
        success:true,
        email:email,
        name:data[i][0],
        title:data[i][1]
      };
    }
  }

  return {
    success:false,
    email:email
  };
}
