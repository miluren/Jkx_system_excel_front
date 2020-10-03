function getOption(o){
    const option = {
        "residentType": "户口性质",
        "isLoan": "是否贷款",
        "politicCountenance": "政治面貌",
        "inType": "入学方式",
        "studyCategory": "学籍类别",
        "studyStatus": "学籍状态",
        "identityType": "证件类型",
        "educationType": "职高还是普高"

    };

    return option[o];
}