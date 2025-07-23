import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                data-type="employee"
                data-employee-id="${employee.id}"
                data-name="${employee.name}"
                >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    'click', (e) => {
        // get what was clicked on
        const wasCLicked = e.target

        // check if it is type employee
        let count = 0
        if(wasCLicked.dataset.type === 'employee'){

            // get employee id
            const id = parseInt(wasCLicked.dataset.employeeId)
    
            // get orders
            const orders = getOrders()
    
            // set a count variable to 0
    
            // iterate orders
            for (const order of orders) {
                
                // check if employee id matches from order employee id
                if(order.employeeId === id){
                    // if so add one to the count
                    count++
                }
    
            }
            
        }
        //  add a window alert
        count === 1?
        window.alert(`${wasCLicked.dataset.name} sold ${count} product`):
        window.alert(`${wasCLicked.dataset.name} sold ${count} products`)
    }
)