import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import EditContactsForm from './EditContactsForm';

const ContactCard = props => {
  return props.contacts.map(contact => (
    <Accordion key={contact.id}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          <div>{contact.fname}</div>
          <Button
            onClick={() => {
              props.editCard(contact);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => props.deleteContact(contact.id)}>
            Delete
          </Button>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            {props.editing ? (
              <div>
                {' '}
                <EditContactsForm
                  editing={props.editing}
                  setEditing={props.setEditing}
                  currentContact={props.currentContact}
                  updateContact={props.updateContact}
                />
              </div>
            ) : (
              <div>
                <div>{contact.fname}</div>
                <div>{contact.lname}</div>
                <div>{contact.email}</div>
                <div>{contact.phone}</div>
              </div>
            )}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  ));
};

export default ContactCard;
