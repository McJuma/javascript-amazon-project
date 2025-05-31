export const deliveryOptions = [
    {
        id: "1",
        deliveryPeriod: 7,
        costInCents: 0
    },

    {
        id: "2",
        deliveryPeriod: 3,
        costInCents: 499
    },

    {
        id: "3",
        deliveryPeriod: 1,
        costInCents: 999
    }
];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;
  
      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
          deliveryOption = option;
        }
  
      });
      return deliveryOption || deliveryOptions(0);
}