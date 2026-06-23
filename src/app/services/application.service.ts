import { ApplicationFormData } from "../interfaces/application.interface";

export const submitApplication = async (formData: ApplicationFormData) => {
  const response = await fetch(
    'http://localhost:3000/application',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || 'Erro ao enviar candidatura');
  }

  return data;
};