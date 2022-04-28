import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import '../styles/SearchForm.css';

function SearchForm() {

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    location: {},
    name: "",
  });


  function onChangeValue(e) {
    const target = e.target;
    setFormValue((state) => ({ ...state, [target.name]: target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!formValue.name) {
      alert("Please enter valid name");
      
      return;
    }
    navigate(`/search?q=${encodeURIComponent(formValue.name)}`);
  }


  return (
    <>
     <div className="MainImg2">
                
                <form onSubmit={onSubmit}>
                    <input type="search" className="rcorners"
                            name="name"
                            placeholder="Search by name"
                            autoComplete={"on"}
                            onChange={onChangeValue}/>
                  <button type="submit" className="HotelBtn2" >Search</button> 
                  </form>
            </div> 
     
    </>
  );
}
export default SearchForm;