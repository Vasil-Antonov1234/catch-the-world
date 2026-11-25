import { Alert } from "react-native";

export function convertDate(date) {
    
    // Check if the date is valid date
    if (!date || typeof(date) !== "object" || isNaN(new Date(date))) {
        return;
    };
    
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return `${year}-${month}-${day}`;
};