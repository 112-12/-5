function getTeacherCourses() {

  const teacherName = getUserInfo().name;

  const sh = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("課程資料");

  const data = sh.getDataRange().getValues();

  const courses = [];

  for(let i=1;i<data.length;i++){

    if(data[i][8] == teacherName){

      const courseKey =
        data[i][5] + "（" + data[i][6] + "）";

      if(!courses.includes(courseKey)){
        courses.push(courseKey);
      }
    }
  }

  return courses;
}
