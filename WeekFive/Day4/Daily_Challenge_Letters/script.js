function myFunction(evt) {
    evt = evt ? evt : event;
    let charCode = evt.charCode
      ? evt.charCode
      : evt.keyCode
      ? evt.keyCode
      : evt.which
      ? evt.which
      : 0;
    if (
      charCode > 31 &&
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)
    ) {
      alert("Enter letters only.");
      return false;
    }
    return true;
  }