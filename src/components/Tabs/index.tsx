import Tabs from "./tabs";
import TabsItem from "./tabsItem";

type TabsComponentProps = {
  Item?: typeof TabsItem;
};

const TransTabs = Tabs as TabsComponentProps;
TransTabs.Item = TabsItem;
export default TransTabs;
