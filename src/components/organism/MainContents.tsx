import { CSSProperties } from 'styled-components';
import News from '../molecules/news/News';

const MainContents = () => {
  const gridArr = [
    '1/1/3/3',
    '1/3/3/5',
    '3/1/5/2',
    '3/2/5/3',
    '3/3/5/4',
    '3/4/5/5',
  ];
  const MainContentsStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4.1fr)',
    gridColumnGap: ' 30px',
    gridRowGap: '30px',
    width: '90%',
  };
  const gridBoxStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '350px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '3px 3px 5px gray',
    overflow: 'hidden',
  };
  return (
    <div style={MainContentsStyle}>
      {gridArr.map((v, i) => (
        <div key={i} style={{ ...gridBoxStyle, gridArea: `${v}` }}>
          <News />
        </div>
      ))}
    </div>
  );
};
export default MainContents;
