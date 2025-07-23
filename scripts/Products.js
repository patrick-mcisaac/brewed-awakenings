import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"
    

    for (const product of products) {
 
        html += `<li
                    data-type="product"
                    data-price="${product.price}"
                    data-name="${product.name}"
                    >${product.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    'click', (e) => {
        const clickedOn = e.target

        if(clickedOn.dataset.type === 'product'){
            window.alert(`
                        ${clickedOn.dataset.name} costs
                        $${clickedOn.dataset.price}`)
        }
    } 
)
