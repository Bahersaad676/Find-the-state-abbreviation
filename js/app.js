let btn = document.getElementById('btn');
let inpt = document.getElementById('input');
let inputAdd = document.getElementById('input-added');
let countList = document.getElementById("count-list");
let out2 = document.getElementById("out2");
var object1 = {
  al: "Alabama",
  ak: "Alaska",
  az: 'Arizona',
  ar: "Arkansas",
  ca: "California",
  co: "Colorado",
  ct: "Connecticut",
  de: "Delaware",
  dc: "District of Columbia",
  fl: "Florida",
  ga: "Georgia",
  hi: "Hawaii",
  id: "Idaho",
  il: "Illinois",
  in: "Indiana",
  ia: "Iowa",
  ks: "Kansas",
  ky: "Kentucky",
  la: "Louisiana",
  me: "Maine",
  ma: "Massachusetts",
  mi: "Michigan",
  md: "Maryland",
  ny: "New York City",
  oh: "Ohio",
  nj: "New Jersey",
  nv: "Nevada",
  mn: "Minnesota",
  ms: "Mississippi",
  mt: "Montana",
  ne: "Nebraska",
  nh: "New Hampshire",
  nm: "New Mexico",
  nc: "North Carolina",
  nd: "North Dakota",
  ok: "Oklahoma",
  or: "Oregon",
  pa: "Pennsylvania",
  ri: "Rhode Island",
  sc: "South Carolina",
  sd: "South Dakota",
  tn: "Tennessee",
  tx: "Texas",
  ut: "Utah",
  vt: "Vermont",
  va: "Virginia",
  wa: "Washington",
  wv: "West Virginia",
  wi: "Wisconsin", 
  wy: "Wyoming"
};

btn.onclick = function () {
  for (var i = 0; i < Object.keys(object1).length; i++) {
    if (input.value == "") {
      out2.innerHTML = "You Have To Enter Text";
    }  else if (inpt.value.toLowerCase() === Object.keys(object1)[i]) {
      countList.innerHTML = inpt.value.toUpperCase() + ` is a state abbreviation ${Object.values(object1)[i]} and it is a state located in the northern part of America `;
      inpt.value = "";
      out2.style.display = "none";
    }
  }
}

