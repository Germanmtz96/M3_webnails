import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

function CitaFormulario() {
  const [value, setValue] = useState(null); 

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 2); 

  
  const nextMonthStart = new Date(today);
  nextMonthStart.setMonth(today.getMonth() + 1);
  nextMonthStart.setDate(1);
  
  
  const maxDate = new Date(nextMonthStart);
  maxDate.setMonth(nextMonthStart.getMonth() + 1);
  maxDate.setDate(0); 

  const handleChange = (nextValue) => {
    setValue(nextValue); 
  };

  const tileClassName = ({ date }) => {
    const day = date.getDay();
    return day === 4 || day === 5 || day === 6 ? 'highlight' : 'hidden'; 
  };

  const tileDisabled = ({ date }) => {
   
    return date < minDate || date > maxDate;
  };

  const handleMonthChange = (newValue) => {
    if (newValue < today || newValue.getMonth() > today.getMonth() + 1) {
      setValue(today);
    } else {
      setValue(newValue);
    }
  };

  
  const formatDate = (date) => {
    if (!date) return ''; 
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className='contariner-calendario'>
      <Calendar
        onChange={handleChange} //! Configura la función para manejar la selección de fecha
        value={value}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
        minDate={minDate}
        maxDate={maxDate}
        onActiveDateChange={({ activeStartDate }) => {
          handleMonthChange(activeStartDate);
        }}
        minDetail='month'
        showNavigation={true}
      />
      {value && <h2 className='fecha-selec'>{formatDate(value)}</h2>}
      
    </div>
  );
}

export default CitaFormulario;
