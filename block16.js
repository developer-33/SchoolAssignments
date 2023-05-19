const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  }
  
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  }
  
  function totalcost (pricePerRefill, refills){
         return pricePerRefill * refills;
  }       
  
   function discount(money){
    const amountToRemove = money *.25
          
    return money - amountToRemove 
  } 
  const couponDiscount = (money) => {
    return money -10 
  }
  
  const checkOut=(obj) =>{
    let totalMoney = totalcost(obj.pricePerRefill, obj.refills) 
  
  
  if(obj.subscription === true){
    totalMoney = discount(totalMoney)
  }
  
  if(obj.coupon){
    totalMoney = couponDiscount(totalMoney)
  }
  console.log(`Your grand total is ${totalMoney}`);
  }
  
  
  checkOut(timmy)
  checkOut(sarah) 
  checkOut(rocky)