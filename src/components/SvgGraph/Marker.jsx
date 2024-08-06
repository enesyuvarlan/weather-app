import PropTypes from 'prop-types';

export const Marker = ({colors, labels, data, active, width, height, range}) => {
  const {path, point} = active || {};
  const value = data[path]?.[point];
  const dr = Math.abs(range[1] - range[0]);
  return (
    <div className='marker' style={{
      opacity: active ? 1 : 0,
      '--color': colors[path],
      '--x': `${point * width / (data[path]?.length - 1)}px`,
      '--y': `${height - value * (height / dr)}px`
    }}>
      <div className='tooltip'>
        <span>{labels[point]}</span>
        <span>{value?.toLocaleString?.()}</span>
      </div>
      <div className='line'/>
      <div className='circle'/>
    </div>
  );
}

Marker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  active: PropTypes.shape({
    path: PropTypes.number.isRequired,
    point: PropTypes.number.isRequired,
  }),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};
