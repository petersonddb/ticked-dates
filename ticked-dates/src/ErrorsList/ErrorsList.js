import './ErrorsList.css';

const ErrorsList = ({className, errors}) => {
  return (
    <section className={`errors-list ${className || ''}`}>
      <h5>Erros encontrados</h5>
      <ul>
        {Object.keys(errors).map((error) => (
          <li key={error}><small>{errors[error].message}</small></li>
        ))}
      </ul>
    </section>
  );
}

export default ErrorsList;
