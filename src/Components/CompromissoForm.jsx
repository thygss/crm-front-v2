import { useState } from 'react';

const CompromissoForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [salesUser, setSalesUser] = useState('');

  // Exemplo de estado para salesUsers, ajuste conforme necessário
  const [salesUsers, setSalesUsers] = useState([
    { id: 1, name: 'Usuário 1' },
    { id: 2, name: 'Usuário 2' },
    // Adicione mais usuários conforme necessário
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      salesUser,
    };

    try {
      const response = await fetch('http://localhost:3001/api/compromisso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Data:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br />
      <label>Hora:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <br />
      <label>Usuário Vendedor:</label>
      <select value={salesUser} onChange={(e) => setSalesUser(e.target.value)}>
        {salesUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompromissoForm;