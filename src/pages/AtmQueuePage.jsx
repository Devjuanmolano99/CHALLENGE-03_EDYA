import { useState, useMemo } from "react";
import Queue from "../models/Queue";
import mockAtmPeople from "../data/atmPeople";
import AtmHeader from "../components/atm/AtmHeader";
import PersonForm from "../components/atm/PersonForm";
import QueueDisplay from "../components/atm/QueueDisplay";

function AtmQueuePage() {
  // Inicializamos la estructura de datos Queue con los mocks
  const initialQueue = useMemo(() => {
    const q = new Queue();
    mockAtmPeople.forEach((p) => q.enqueue(p));
    return q;
  }, []);

  // Mantenemos una instancia de Queue en el estado
  const [queueInstance, setQueueInstance] = useState(initialQueue);
  // Estado para forzar re-renderizado reactivo cuando la cola muta
  const [peopleList, setPeopleList] = useState(() => initialQueue.toArray());
  const [attendedPerson, setAttendedPerson] = useState(null);

  // Manejar adición de nueva persona (Enqueue)
  const handleAddPerson = (newPerson) => {
    queueInstance.enqueue(newPerson);
    setPeopleList(queueInstance.toArray());
  };

  // Manejar atención del cliente al frente (Dequeue)
  const handleDequeue = () => {
    const dequeued = queueInstance.dequeue();
    if (dequeued) {
      setAttendedPerson(dequeued);
      setPeopleList(queueInstance.toArray());
    }
  };

  // Reiniciar con datos mock iniciales
  const handleResetMock = () => {
    const q = new Queue();
    mockAtmPeople.forEach((p) => q.enqueue(p));
    setQueueInstance(q);
    setPeopleList(q.toArray());
    setAttendedPerson(null);
  };

  // Vaciar la cola
  const handleClearQueue = () => {
    queueInstance.clear();
    setPeopleList([]);
    setAttendedPerson(null);
  };

  // Cálculos derivados
  const queueSize = peopleList.length;
  const totalWithdrawal = peopleList.reduce(
    (sum, p) => sum + (Number(p.withdrawalAmount) || 0),
    0
  );
  const currentPerson = queueInstance.peek();

  return (
    <div className="page atm-page">
      <AtmHeader
        queueSize={queueSize}
        totalWithdrawal={totalWithdrawal}
        currentPerson={currentPerson}
      />

      <div className="atm-main-grid">
        <PersonForm onAddPerson={handleAddPerson} />
        <QueueDisplay
          people={peopleList}
          onDequeue={handleDequeue}
          onResetMock={handleResetMock}
          onClearQueue={handleClearQueue}
          attendedPerson={attendedPerson}
        />
      </div>
    </div>
  );
}

export default AtmQueuePage;
