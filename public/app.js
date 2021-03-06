import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let doc;
// HTML element
const $form = document.querySelector(".new-item-form");
const $type = document.querySelector("#type");
const $tofrom = document.querySelector("#tofrom");
const $details = document.querySelector("#details");
const $amount = document.querySelector("#amount");
// List template instance
const $ul = document.querySelector(".item-list");
const list = new ListTemplate($ul);
// Add event listener to from
$form.addEventListener("submit", (e) => {
    e.preventDefault();
    // using tuples type approach
    let values;
    values = [$tofrom.value, $details.value, $amount.valueAsNumber];
    if ($type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, $type.value, "end");
});
