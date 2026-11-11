// nesting object
const user ={
    name : "kavya",
    address : {
        city : "chandigarh",
        pin:160012,
        location : {
            lat : 23.2,
            lng : 77.4,
        },
    },
};


let {lat,lng}=user.address.location;