import PropTypes from 'prop-types';
import {useRef} from 'react';

export const Points = ({data, width, height, setActive, range}) => {
  const timeout = useRef();
  const dr = Math.abs(range[1] - range[0]);
  const activate = (path, point) => {
    clearTimeout(timeout.current);
    setActive({path, point});
  }
  const deactivate = (path, point) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setActive(cur => {
        if (cur.path === path && cur.point === point) {
          return null;
        }
        return cur;
      });
    }, 200);
  }
  return (
    <div className='points'>
      {data.map((row, r) => row.map((y, i) => (
        <div key={`${r}-${i}`}
             style={{'--x': `${i * width / (row.length - 1)}px`, '--y': `${height - y * (height / dr)}px`}}
             onMouseEnter={() => activate(r, i)} onMouseLeave={() => deactivate(r, i)}/>
      )))}
    </div>
  );
}

Points.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};
