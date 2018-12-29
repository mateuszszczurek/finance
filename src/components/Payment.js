import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

const Payments = ({items}) =>
        <ListGroup>
        {items.map((item, index) => (
            <ListGroupItem key={index}>{item.user} {item.name} {item.amount} {item.date}</ListGroupItem>))}
        </ListGroup>;

export default Payments;