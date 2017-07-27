var myName = "김태민"
var myRole = "웹 개발자"
var formattedName = HTMLheaderName.replace("%data%",myName);
$('#header').prepend(formattedName);
var formattedRole = HTMLheaderRole.replace('%data%',myRole);
$('#header').prepend(formattedRole);

// work, school, bio 객체표기법으로 객체생성해놓기.
var education = {
    "schools": [
        {
            "name": "구로고등학교",
            "degree" : "졸업"
        },
        {
            "name": "성공회대학교",
            "degree": "학사졸업"
        }
    ]
}

var work = {
    "company": [
        {
            "name": "성공회대학교 인문학습원",
            "years": 1.5
        }
    ]
}

var bio = {
    "name": "김태민",
    "age": 25,
    "skills": ["java", "MySQL", "Spring", "python"]
}

