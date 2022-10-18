function validateForm() 
{
    let n = document.forms["myForm"]["name"].value;
    let o = document.forms["myForm"]["occ"].value;
    let e = document.forms["myForm"]["exp"].value;
    let h = document.forms["myForm"]["hor"].value;
    
    if (n == "") 
    {
      alert("Enter Faculty Name");
      return false;
    }
    if (o == "") 
    {
      alert("Enter Faculty Name");
      return false;
    }
    if (e == "") 
    {
      alert("Enter Faculty Expertise");
      return false;
    }
    if (h == "") 
    {
      alert("Enter Faculty Honour");
      return false;
    }
  }