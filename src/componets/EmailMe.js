export const generateEmail = ({emailSubject , emailBody}) => {
    // const emailBody = "Hello Akash,";
    // const emailSubject = "Impressed with your Portfolio";
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=akashadhikary105@gmail.com&su=${emailSubject}&body=${emailBody}`;
    window.open(gmailUrl, '_blank');
  };