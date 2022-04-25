function confirmation(){
    return `, your booking has been confirmed for room no. abc.`;
}

function Booked(guest,message){
    const confirm = confirmation();
    console.log(guest  + confirm);
}
function fail(){
    return `, your booking has been failed for room no. abc.Please contact us.`;
}
function failed(guest, info){
   const failure = fail();
   console.log(guest  + failure);
}

Booked(`Ansh`,confirmation)
Booked(`pardeep`,confirmation)
failed(`Ansh`,fail)
failed(`rahul`,fail)



