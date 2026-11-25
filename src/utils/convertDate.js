import { Alert } from "react-native";

export function convertDate(date, upload = false) {
     
    if (upload) {
        const tokens = date.split(".");
        const day = tokens[0];
        const month = tokens[1];
        const year = tokens[2];

        return `${year}-${month}-${day}`;
    };

    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    return `${day}.${month}.${year}`;
};