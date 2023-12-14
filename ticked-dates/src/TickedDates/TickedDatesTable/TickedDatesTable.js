import './TickedDatesTable.css'
import TickedDatesTableEntry from "./TickedDatesTableEntry/TickedDatesTableEntry";

const TickedDatesTable = ({ tickedDates, onSubmit = null }) => {
  return (
    <table className="ticked-dates-table">
      <tbody>
        {tickedDates.map((tickedDate) => {
          return <TickedDatesTableEntry key={tickedDate._id || ''}
                                        onSubmit={onSubmit}
                                        tickedDate={tickedDate} />
        })}
      </tbody>
    </table>
  );
}

export default TickedDatesTable;
