export const currencyFormatter = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GHC",
    });

    return formatter.format(amount);
};
