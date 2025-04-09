function getClothingRecommendation(temperature){
    if(temperature < 0){
        return "Wear a heave coat, it's freezing!";
    }
    else if(temperature >= 0 && temperature <= 15){
        return "Wear a jacket";
    }
    else if(temperature >= 16 && temperature <= 25){
        return "A light sweater should be fine";
    }
    else{
        return "It's warm, wear something light!"
    }
}
getClothingRecommendation(20);

function getGradeComment(grade){
    if(grade >= 90 && grade <= 100){
        return "Excellent work!";
    }
    else if(grade >= 80 && grade <= 89){
        return "Great job!";
    }
    else if(grade >= 70 && grade <= 79){
        return "Good effort.";
    }
    else if(grade >= 60 && grade <= 69){
        return "You passed, but there's room for improvement"
    }
    else{
        return "Unfortunately you did not pass"
    }
}
getGradeComment(78);