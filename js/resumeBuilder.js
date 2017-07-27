var myName = "김태민"
var myRole = "웹 개발자"
var formattedName = HTMLheaderName.replace("%data%",myName);
$('#header').prepend(formattedName);
var formattedRole = HTMLheaderRole.replace('%data%',myRole);
$('#header').prepend(formattedRole);

// work, school, bio 객체표기법으로 객체생성해놓기.


