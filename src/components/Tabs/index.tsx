import Tabs, { TabProps } from "./tabs";
import TabsItem from "./tabsItem";

type TabsComponentProps = React.FC<TabProps> & {
  Item?: typeof TabsItem;
};

let TransTabs = Tabs as TabsComponentProps;
TransTabs.Item = TabsItem;
export default TransTabs;
