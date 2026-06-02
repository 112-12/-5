function buildQRContent(student){

  const period =
    getCurrentPeriod();

  const today =
    Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "yyyyMMdd"
    );

  return [
    student.studentId,
    student.name,
    today,
    period,
    student.subject
  ].join("|");

}
