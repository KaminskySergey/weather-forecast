import * as Yup from 'yup';

export const useValidateAddTrip = () => {
    const today = new Date().toISOString().split('T')[0]; 
  const maxStartDate = new Date();
  maxStartDate.setDate(maxStartDate.getDate() + 15);
  const maxStartDateString = maxStartDate.toISOString().split('T')[0];
    
  const validationSchema = Yup.object({
    city: Yup.string().required('Enter the city'),
    startDate: Yup.date()
      .min(today, 'Start date cannot be before today')
      .max(maxStartDateString, 'Start date cannot be more than 15 days from now')
      .required('Enter the start date'),
    endDate: Yup.date()
      .min(Yup.ref('startDate'), 'End date cannot be before the start date')
      .max(maxStartDateString, 'End date cannot be more than 15 days from now')
      .required('Enter the end date'),
  });

  return {
    validationSchema
  }
}