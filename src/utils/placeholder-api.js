export const submitApplication = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Application submitted:', data);
        resolve({ success: true, message: 'Application received' });
      }, 1000);
    });
  };
  
  export const checkInvitationCode = (code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = code === 'ak2025'; // Example validation
        resolve({ isValid });
      }, 500);
    });
  };