export function CurrencyFormat(amount: number){
    return '$' + (amount/100).toFixed(2)
}