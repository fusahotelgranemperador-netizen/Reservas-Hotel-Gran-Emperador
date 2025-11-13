import { useState } from 'react';

const habitaciones=[{num:'202',cap:2},{num:'203',cap:2}];

export default function App(){
 const [reservas,setReservas]=useState([]);
 const [form,setForm]=useState({nombre:'',entrada:'',salida:'',contacto:'',llegada:'',habitacion:''});

 const add=()=>{
  const h=habitaciones.find(x=>x.num===form.habitacion);
  if(!h)return;
  setReservas([...reservas,{...form,capacidad:h.cap}]);
 };

 return (
  <div className="p-6 max-w-xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Reservas Hotel</h1>
    <input className="border p-2 w-full mb-2" placeholder="Nombre"
      value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
    <button className="bg-blue-500 text-white px-4 py-2" onClick={add}>Agregar</button>

    <div className="mt-6">
      {reservas.map((r,i)=>(
        <div key={i} className="p-3 bg-white shadow mb-2">
          {r.nombre}
        </div>
      ))}
    </div>
  </div>
 );
}