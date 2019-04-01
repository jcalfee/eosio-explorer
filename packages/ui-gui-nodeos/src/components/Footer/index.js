
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./SectionFooterStyled'),
  loading: () => false
});