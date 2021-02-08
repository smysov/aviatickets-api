import '../styles/main';
import './plugins/index'
import locations from './store/locations';

locations.init().then(res => console.log(res));
