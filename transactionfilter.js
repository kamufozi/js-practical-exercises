function transactionFilter(e){
    return e.filter(d=>(d.type==='purchase'&&d.amount>40)).sort((a,b)=>b.amount-a.amount);
}
let Input= [
    { type: 'purchase', amount: 50, category: 'groceries' },
    { type: 'sale', amount: 100, category: 'electronics' },
    { type: 'purchase', amount: 30, category: 'books' },
    { type: 'purchase', amount: 45, category: 'clothes' }]
console.log(transactionFilter(Input));