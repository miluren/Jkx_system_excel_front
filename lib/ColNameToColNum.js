function getColNumByColName(key) {
    var colNameToColNum={
        "studentNum":1,
        "studentName":2,
        "college":3,
        "stuClass":4,
        "nativePlace":5,
        "nation":6,
        "politicCountenance":7,
        "selfTel":8,
        "identityID":9,
        "address":10,
        "examNum":11,
        "fatherName":12,
        "motherName":13,
        "fatherTel":14,
        "motherTel":15,
        "clothesSize":16,
        "shoeSize":17,
        "educationType":18,
        "dormNum":19,
        "major":20,
        "birthday":21,
        "familyTel":22,
        "inGrade":23,
        "inType":24,
        "email":25,
        "studyCategory":26,
        "studyStatus":27,
        "identityType":28,
        "residentType":29,
        "bank":30,
        "bankCardID":31,
        "isLoan":32
    };
    return colNameToColNum[key];
}