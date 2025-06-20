function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("year");

    let rate = Number(rateInput.value) / 100;
    let principal = Number(principalInput.value);
    let years = Number(yearsInput.value);

    if (principal <0 || rate < 0 || years < 0) {
        window.alert("Please enter positive values for principal, rate, and years.");
        return;
    }

    const result= principal * Math.pow((1 + rate/1), 1 * years);

    totalAmount.textContent = result.toLocaleString(undefined, 
                                            {style: "currency",
                                             currency: "INR",
                                             minimumFractionDigits: 2});
}