## AutoComplete 自动完成

### 基础使用

```tsx
import React from "react";
import { AutoComplete } from "pusu-ui";
import "pusu-ui/dist/index.css";

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      console.log(items);
      const formatItems = items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }));
      return formatItems;
    });
};

export default () => (
  <>
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={(item) => {
        console.log(item.value, "selected");
      }}
    />
  </>
);
```
