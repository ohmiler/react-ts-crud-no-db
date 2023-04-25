export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface Update {
  id: number;
  updates: Contact;
}
export interface Action {
  type: 'ADD_CONTACT' | 'UPDATE_CONTACT' | "DELETE_CONTACT"
  payload: Contact | Update;
}
export interface State {
  contacts: Contact[];
}
export const contactsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload as Contact]
      };
    case 'UPDATE_CONTACT':
      const { id, updates } = action.payload as Update;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              ...updates
            };
          }
          return contact;
        })
      };
    case "DELETE_CONTACT": {
        const { id } = action.payload;
        return {
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== id)
        }
    }
    default:
      return state;
  }
};