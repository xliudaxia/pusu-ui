import { library } from '@fortawesome/fontawesome-svg-core';
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import {fas} from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon';
library.add(fas)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme='primary' size="10x"/>
        <Menu defaultIndex={'0'} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link 1
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu  title="下拉菜单">
            <MenuItem>
            下拉菜单1 
            </MenuItem>
            <MenuItem>
            下拉菜单2 
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
