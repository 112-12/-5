function checkPermission() {

  const email =
    Session.getActiveUser().getEmail();

  const sh =
    SpreadsheetApp
    .getActive()
    .getSheetByName("User");

  const data =
    sh.getDataRange().getValues();

  for(let i=1;i<data.length;i++){

    if(
      data[i][2].toLowerCase() ==
      email.toLowerCase()
    ){

      return {
        success:true,
        name:data[i][0],
        title:data[i][1],
        email:email
      };

    }

  }

  throw new Error("無操作權限");
}
