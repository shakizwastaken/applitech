const ContactBtn = ({ className }) => {
  const handleClick = (e) => {
    navigator.clipboard.writeText("06 123 123 123");
    window.alert("numero de telephone copié");
  };

  return (
    <button className={className} onClick={handleClick}>
      Contactez nous
    </button>
  );
};
export default ContactBtn;
