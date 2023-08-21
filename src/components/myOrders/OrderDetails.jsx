import React from "react";

const OrderDetails = () => {
  const itemsTotal = 2132;
  const shippingCharges = 200;
  const tax = 232;
  const totalAmount = itemsTotal + shippingCharges + tax;

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {`sjda 12-32ss dsad`}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Stuart"}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>
            {"#asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Items Total</b>
                </td>
                <td>₹{itemsTotal}</td>
              </tr>
              <tr>
                <td>
                  <b>Shipping Charges</b>
                </td>
                <td>₹{shippingCharges}</td>
              </tr>
              <tr>
                <td>
                  <b>Tax</b>
                </td>
                <td>₹{tax}</td>
              </tr>
              <tr>
                <td>
                  <b>Total Amount</b>
                </td>
                <td>₹{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{itemsTotal}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
