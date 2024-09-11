export interface NewEventFormProps {
  formData: { 
    eventName: string, 
    address: string, 
    address2: string, 
    city: string, 
    state: string, 
    zip: string, 
    description: string, 
    date: string, 
    time: string
  };
  onFormChange: (arg: EventTarget) => void;
  onFormSubmit: (arg: React.SyntheticEvent) => void;
}
