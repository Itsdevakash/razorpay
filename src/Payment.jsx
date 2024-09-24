import useRazorpay from "react-razorpay";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment=()=>{
  const navigate = useNavigate(); 
  const [amount, setAmount] = useState("");
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')
  const[Razorpay] = useRazorpay()
  

  const paynow= async()=>{
    event.preventDefault()
    const response = await fetch(`https://tsstudio.pro/api/react-create-Order?amount=${amount}`, {
      method: "POST",
    });
 const data = await response.json();
  console.log(data);


  const options  = {
    amount:data.amount,
    order_id : data.orderId,
    key: "rzp_test_2ieXmZDUGKLZRH", 
    currency:data.currency,
    name: "onlineshop.com",
    description: "React E-commerce",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaH_zoFeYq-q9_uRGiW9rGl-MKmABx5_6uig&s",
    handler: function (response) {
      setAmount("")
      navigate("/thank-you", {
        state: {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          amount: amount,  // Pass the amount as well
        },
      });
     
    },
    prefill: {
      name: name,
      email:email,
      contact:mobile,
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "green",
    },


  }


  const rzp = new Razorpay(options);

  rzp.on("payment.failed", function (response) {  
    setAmount("")
      navigate("/thank-you")
  });

  rzp.open();

  }
  return(
    <div  style={{ 
      textAlign:'center',
     }}>

      <h1> Payment Gateway Integration</h1>
      <form   onSubmit={paynow}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        required
        style={{          
          fontSize: '26px',    
         }}
      />   
     <br></br> <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        required
        style={{ 
        fontSize: '26px',    
         }}
      />
    <br></br>    <br></br>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required
        style={{          
          fontSize: '26px',    
         }}
      />

<br></br> <br></br>
    <input
        type="number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Enter Mobile No "
        maxlength="10"
        required
        style={{          
          fontSize: '26px',    
         }}
      />
          <br></br> <br></br>
      <button
       style={{ 
        fontSize: '24px',
        border: 'none',
        padding: '12px',
        borderRadius: '7%',
        color: '#fff',
        background: 'black',
        }}
       >Pay Now</button>
      </form>
    </div>
  )
}

export default Payment
