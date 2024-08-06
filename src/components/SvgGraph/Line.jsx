import PropTypes from 'prop-types';

export const Line = ({path, color}) => {
  const dx = 100 / (path.length - 1);
  
  const d = `M0,${path[0]} ${path.slice(1).map((p, i) => (
    `C${dx * i + dx / 2},${path[i]} ` +
    `${dx * (i + 1) - dx / 2},${path[i + 1]} ` +
    `${dx * (i + 1)},${path[i + 1]} `
  )).join(' ')}`;
  return (
    <>
      <path stroke={color} d={d} fill='none' className='stroke'/>
      <path d={d + ` V0 H0 Z`} fill={`url(#gradient-${color})`} className='gradient'/>
      <defs>
        <linearGradient id={`gradient-${color}`} x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={color} stopOpacity={0}/>
          <stop offset='100%' stopColor={color} stopOpacity={0.15}/>
        </linearGradient>
      </defs>
    </>
  );
}

Line.propTypes = {
  path: PropTypes.arrayOf(PropTypes.number).isRequired,
  color: PropTypes.string.isRequired,
};
