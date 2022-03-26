export function formatPrice(price) {
  return price.toLocaleString(undefined, { style: "currency", currency: "USD" });
}
