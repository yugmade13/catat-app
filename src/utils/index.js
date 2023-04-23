const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const showFormattedText = (text) => text.substring(0, 300);

export { showFormattedDate, showFormattedText };
