import React from 'react';

const Payments = ({items}) =>
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item.user} {item.name} {item.amount} {item.date}</li>))}
        </ul>;

export default Payments;