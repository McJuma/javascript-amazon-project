import { cart } from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";



export function renderPaymentSummary() {

    let productPriceInCents = 0;
    let shippingCostInCents = 0;

    cart.forEach((cartItem) => {
       const product = getProduct(cartItem.productId);
       productPriceInCents += product.priceInCents * cartItem.quantity;

       const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
       shippingCostInCents += deliveryOption.costInCents * cartItem.quantity;
    });
    
    const totalBeforeTaxInCents = productPriceInCents + shippingCostInCents;
    const taxInCents = totalBeforeTaxInCents * 0.1; 

    const totalInCents = totalBeforeTaxInCents + taxInCents;

    // create html

    const paymentSummaryHtml = 
    `
            <div class="payment-summary-title">
                Order Summary
            </div>
            <div class="payment-summary-row">
                <div>Items(${cart.length}):</div>
                <div class="payment-summary-money">$${formatCurrency(productPriceInCents)}
                </div>
            </div>
            <div class="payment-summary-row">
                <div>Shipping: &amp; handling:</div>
                <div class="payment-summary-money">$${formatCurrency(shippingCostInCents)}
                </div>
            </div>

            <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxInCents)}
                </div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated Tax (10%):</div>
                <div class="payment-summary-money">$${formatCurrency(taxInCents)}
                </div>
            </div>

            <div class="payment-summary-row total-row">
                <div>Order Total:</div>
                <div class="payment-summary-money">$${formatCurrency(totalInCents)}
                </div>
            </div>
            <!--

            <div class="payment-summary">
                <button class="payment-summary-button">Pay with Amazon Pay</button>
            </div>
            <div class="payment-summary">
                <button class="payment-summary-button">
                Pay with Amazon Card
                </button>
            </div>


            <div class="payment-summary">
                <button class="payment-summary-button">Pay with M-Pesa</button>
            </div>

            <div class="payment-summary">
                <button class="payment-summary-button">Pay with Cash</button>
            </div>
            -->

            <!-- Place order button -->
            <button class="place-order-button button-primary">Place Order</button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;
    
}