function isStudentEligible(mathScore, englishScore,isOnProbation){
    const averageScore = (mathScore + englishScore) / 2;
    if(averageScore >= 60 && isOnProbation === false){
        return true;
    }
    return false;
}
isStudentEligible(70, 50, false);

function canAccessResource(isAdmin, hasPaid, isBanned){
    if(isAdmin || hasPaid && isBanned === false){
        return true;
    }
    return false;
}

canAccessResource(false, true, false);