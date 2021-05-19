const basketOne = [
  { name: 'book', taxExempt: true, imported: false, price: 12.49 },
  { name: 'music CD', taxExempt: false, imported: false, price: 14.99 },
  { name: 'chocolate bar', taxExempt: true, imported: false, price: 0.85 }
]

const basketTwo = [
  { name: 'imported chocolates', taxExempt: true, imported: true, price: 10 },
  { name: 'imported perfume', taxExempt: false, imported: true, price: 47.50 }
]

const basketThree = [
  { name: 'imported perfume', taxExempt: false, imported: true, price: 27.99 },
  { name: 'bottle of perfume', taxExempt: false, imported: false, price: 18.99 },
  { name: 'headache pills', taxExempt: true, imported: false, price: 9.75 },
  { name: 'imported chocolates', taxExempt: true, imported: true, price: 11.25 }
]

function calculateOutput(basket) {
  const factor = 0.05
  let totalTax = 0
  let salesTotal = 0
  basket.map((obj) => {
    let salesTax = 0
    let importTax = 0
    let newPrice = 0
    if (obj.taxExempt === false) {
      salesTax = Math.round(((obj.price / 100) * 10) / factor) * factor
    }
    if (obj.imported === true) {
      importTax = Math.ceil(((obj.price / 100) * 5) / factor) * factor
    }
    newPrice = Math.round((obj.price + salesTax + importTax) * 100) / 100
    totalTax += salesTax += importTax
    salesTotal += newPrice
    console.log(obj.name, ':', newPrice)
  })
  const totalTaxRounded = Math.round(totalTax * 100) / 100
  const salesTotalRounded = Math.round(salesTotal * 100) / 100
  console.log('Sales Taxes:', totalTaxRounded)
  console.log('Total:', salesTotalRounded)
}

calculateOutput(basketThree)