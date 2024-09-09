import {useDimensions} from 'webrix/hooks';
import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import {Marker} from "./Marker";
import {Line} from "./Line";
import {Points} from "./Points";
import "~/components/SvgGraph/Graph.css";


export const Graph = ({data, colors, range, labels, title, subtitle, legend}) => {
  const [active, setActive] = useState({path: 1, point: 2});
  const graph = useRef();
  const {width, height} = useDimensions(graph);
  return (
    <div className='graph' ref={graph}>
      <Marker colors={colors} data={data} active={active} labels={labels} width={width} height={height} range={range}/>
      <svg className='graph-svg' viewBox={`0 ${range[0]} 100 ${range[1]}`} preserveAspectRatio='none'>
        {data.map((path, i) => (
          <Line key={i} path={path} color={colors[i]}/>
        ))}
      </svg>
      <div className='labels'>
        {labels.map(label => (
          <div key={label}>{label}</div>
        ))}
      </div>
      <Points data={data} width={width} height={height} setActive={setActive} range={range}/>
    </div>
  );
};

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  legend: PropTypes.arrayOf(PropTypes.string).isRequired,
};
