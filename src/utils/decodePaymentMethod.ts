export const decodePaymentMethod = (paymentMethod: string) => {
  switch (paymentMethod) {
    case "credit_card":
      return "Cartão de crédito";
    case "debit_card":
      return "Cartão de débito";
    case "money":
      return "Dinheiro";
    case "pix":
      return "Pix";
    case "bank_slip":
      return "Boleto";
    default:
      return paymentMethod;
  }
};
