import Button, { ButtonType, ButtonSize } from "./components/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu mode="vertical" defaultIndex={0} onSelect={(index)=>alert(index)}>
          <MenuItem index={0}>
            cool link 1
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>
            cool link 3
          </MenuItem>
        </Menu>
        <Button className="douban" autoFocus >默认按钮</Button>
        <Button btnType={ButtonType.Danger}>危险按钮</Button>
        <Button size={ButtonSize.Smaill}>小按钮</Button>
        <Button btnType={ButtonType.Primary} >primay 按钮</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="www.baidu.com">Baidu Link</Button>
        <Button disabled btnType={ButtonType.Link} href="www.baidu.com">Baidu Link</Button>
      </header>
    </div>
  );
}

export default App;
