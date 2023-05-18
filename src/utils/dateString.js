export const dateString = (date) => {
    // let new_date = date.split("-");
    // let string_date = new Date(new_date[2], new_date[0] - 1, date[1]);
    let string_date = new Date(date);

    return string_date.toDateString();
};
