export default function mask(event) {
  const regEx = /[!%№?*.;":'a-zA-Zа-яА-Яё]/;
  if (event.target.value.length === 0) {
    event.target.value = `+7${event.target.value}`;
  }
  event.target.value = event.target.value.replace(regEx, "");
}
