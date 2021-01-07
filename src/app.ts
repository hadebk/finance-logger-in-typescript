import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

let doc: HasFormatter;

// HTML element
const $form = document.querySelector(".new-item-form") as HTMLFormElement;
const $type = document.querySelector("#type") as HTMLSelectElement;
const $tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const $details = document.querySelector("#details") as HTMLInputElement;
const $amount = document.querySelector("#amount") as HTMLInputElement;

// List template instance
const $ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate($ul);

// Add event listener to from
$form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // using tuples type approach
  let values: [string, string, number];
  values = [$tofrom.value, $details.value, $amount.valueAsNumber];

  if ($type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, $type.value, "end");
});
