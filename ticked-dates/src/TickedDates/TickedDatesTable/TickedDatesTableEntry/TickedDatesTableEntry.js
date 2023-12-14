import './TickedDatesTableEntry.css';
import { useState } from "react";

const TickedDatesTableEntry = ({ tickedDate, onSubmit = null }) => {
  const [date, setDate] = useState('')
  const readOnly = onSubmit === null;

  const handleFormSubmit = (e) => {
    onSubmit({date});
    setDate('');
    e.preventDefault();
  }

  return (
    <tr className="ticked-dates-table-entry">
      <td>
        <span>Data marcada</span>
      </td>
      <td>
        <form onSubmit={handleFormSubmit}>
          {readOnly
            ? (
              <div>{tickedDate.date.toLocaleDateString()}</div>
            ) : (
              <>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="submit" />
              </>
            )
          }
        </form>
      </td>
    </tr>
  );
}

export default TickedDatesTableEntry;
