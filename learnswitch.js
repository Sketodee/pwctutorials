const score = 110

switch (true) {
    case (score >= 70 && score <= 100):
        console.log('distinction')
        break;

        case (score>= 60 && score < 70):
        console.log('very good')
        break;

        case (score>= 50 && score < 60):
            console.log('good')
            break;

            case (score>= 40 && score < 50):
            console.log('pass')
            break;

            case (score>= 0 && score < 40):
            console.log('pass')
            break;

    default:
        console.log("score not valid")
        break;
}
