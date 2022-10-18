function validateForm() 
{
    let x = document.forms["myForm"]["uname"].value;
    let y = document.forms["myForm"]["pass"].value;

    if (x == "") 
    {
      alert("Please Enter your username");
      return false;
    }
    if (y == "") 
    {
      alert("Please Enter your Password");
      return false;
    }
  }