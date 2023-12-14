import './TickedDates.css';
import BlankSlate from '../BlankSlate/BlankSlate';
import TickedDatesTable from './TickedDatesTable/TickedDatesTable';
import { useContext, useEffect, useState } from 'react';
import HttpClient from '../HttpClient/HttpClient';
import ErrorsList from '../ErrorsList/ErrorsList';

const TickedDates = () => {
  const [tickedDates, setTickedDates] = useState([]);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState([true]);
  const httpClient = useContext(HttpClient);

  const createTickedDate = ({date}) => {
    httpClient.post('/ticked-dates', { date: date })
              .then(() => {
                setErrors(null)
                setLoading(true)
              }).catch(error => setErrors(error.response.data.errors));
  }

  const prepareData = (data) => {
    data.forEach((entry) => {
      const dateSegments = entry.date.split('-')

      entry.date = new Date(dateSegments[0], dateSegments[1] - 1, dateSegments[2])
    })

    return data
  }

  useEffect(() => {
    const fetchTickedDates = () => {
      httpClient.get('/ticked-dates')
                .then(response => setTickedDates(prepareData(response.data)))
                .catch(error => console.log(error));

      setLoading(false);
    }

    if(loading) fetchTickedDates();
  }, [httpClient, loading]);

  return (
    <div className="ticked-dates">
      <h1 className="title">Datas Marcadas</h1>

      <TickedDatesTable className="ticked-dates-table" tickedDates={[{ id: '', date: null }]} onSubmit={createTickedDate} />
      {errors && <ErrorsList className="errors-list" errors={errors} />}

      {tickedDates.length > 0 ? <TickedDatesTable className="ticked-dates-table" tickedDates={tickedDates} />
                              : <BlankSlate className="blank-slate" />}

    </div>
  );
}

export default TickedDates;
