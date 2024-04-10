import React,{useState} from 'react'
import './ServicePage.css'
const ServicePage = () => {

const [list,setList]=useState(['Flight',"Stays",'Car Rentals',"Cruises"])
const [selectedService, setSelectedService] = useState(null);

const handleServiceClick = (service) => {
  setSelectedService(service);
  console.log(service)
};

return (
    <div className='servicePage'>
       {list.map((item, index) => (
        <button key={index}  className={selectedService === item ? 'selectedService' : 'serviceList'} onClick={() => handleServiceClick(item)}>{item}</button>
      
      ))}

      {selectedService == 'Flight' && 
      <>
      <br/>
      
      <select id="position" name="position" required>
        <option value="">one-way</option>
        <option value="president">return</option>
        <option value="president">multi-city</option>
      </select>

      <select id="position" name="position" required>
        <option value="">1 adults</option>
        <option value="president">2 adults</option>
        <option value="president">3 adults</option>
        <option value="president">4 adults</option>
       
      </select>

      <select id="position" name="position" required>
        <option value="">economy</option>
        <option value="president">premium Economy</option>
        <option value="president">bussiness</option>
        <option value="president">first Class</option>
      </select>

      <br/>
      <input type="text" placeholder='from '/>
      <input type="text" placeholder='in '/>
      <input type='date' style={{height:'40px'}}/>
      <input type='submit' className='serviceBtn'/>

      <div class="parent">
        <div class="div1">
          <button>Cheapest</button>
          <br/>
          <button>Quickest</button>
          <br/>
          <button>best</button>
           </div>
        <div class="div2">
        <select id="position" name="position" required>
        <option value=""> stops</option>
        <option value="president"> direct</option>
        <option value="president">one stop</option>
        <option value="president">two stops</option>
       
      </select>

           </div>
        <div class="div3">kiaaaaj </div>
        </div>
      </>
      }

    </div>
  )
}

export default ServicePage