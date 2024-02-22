export function capitalizeFirstLetter(inputString: string) {
    if (!inputString) {
        return inputString;
    } else {
        return inputString.charAt(0).toUpperCase() + inputString.slice(1);
    }
}