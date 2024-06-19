
export default function mask(event) {
    if (event.target.value.length ===0){
    event.target.value = `+7 ${event.target.value}`}
    console.log(event.target.value); 
}
