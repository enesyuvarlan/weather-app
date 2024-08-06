import PropTypes from 'prop-types';

export const Legend = ({labels, colors}) => (
  <div className='legend'>
    {labels.map((l, i) => (
      <div key={l}><span style={{'--color': colors[i]}}/>{l}</div>
    ))}
  </div>
);

Legend.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
