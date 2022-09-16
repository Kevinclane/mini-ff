
export const calculateAnimationTime = (startIndex: number, endIndex: number) => {
    let time = 0;

    switch (startIndex) {
        case 0:
            switch (endIndex) {
                case 0:
                    time = 1;
                    break;
                case 1:
                case 2:
                    time = 2;
                    break;
            }
            break;

        case 1:
            switch (endIndex) {
                case 0:
                    time = 2;
                    break;
                case 1:
                    time = 3;
                    break;
                case 2:
                    time = 4;
                    break;
            }
            break;

        case 2:
            switch (endIndex) {
                case 0:
                    time = 2;
                    break;
                case 1:
                    time = 4;
                    break;
                case 2:
                    time = 3;
                    break;
            }
            break;

        default:
            return time;
    }

    return time;
}

