import { Input } from "./input";
import { DataSourceType, AutoComplete } from "./autoComplete";

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const BigInput = () => {
  // const handleFetch = (query: string) => {
  //   return members.filter((name) => name.value.includes(query));
  // };
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

  // DataSourceType<LakerPlayerProps>
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>;
    return (
      <>
        <h2>姓名：{itemWithGithub.value}</h2>
        <p> 网址：{itemWithGithub.url}</p>
      </>
    );
  };
  return (
    <div>
      <>
        <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
        <Input
          style={{ width: "300px" }}
          placeholder="small size"
          value="测试"
          size="sm"
        />
        <Input
          style={{ width: "300px" }}
          placeholder="disabled input"
          disabled
        />
        <Input
          style={{ width: "300px" }}
          placeholder="input with icon"
          icon="search"
        />
        <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
        <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
        <Input
          style={{ width: "300px" }}
          defaultValue="prepend text"
          prepend="https://"
        />
        <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
        <AutoComplete
          fetchSuggestions={handleFetch}
          renderOption={renderOption}
          onSelect={() => {
            console.log("选中了");
          }}
        />
      </>
    </div>
  );
};
export default BigInput;

// const defaultInput = () => (
//   <>
//     <Input
//       style={{ width: "300px" }}
//       placeholder="placeholder"
//       onChange={action("changed")}
//     />
//     <ControlledInput />
//   </>
// );
// const inputWithDisabled = () => (
//   <Input
//     style={{width: '300px'}}
//     placeholder="disabled input"
//     disabled
//   />
// )

// const inputWithIcon = () => (
//   <Input
//     style={{width: '300px'}}
//     placeholder="input with icon"
//     icon="search"
//   />
// )

// const inputWithSize = () => (
//   <>
//     <Input
//       style={{width: '300px'}}
//       defaultValue="large size"
//       size="lg"
//     />
//     <Input
//       style={{width: '300px'}}
//       placeholder="small size"
//       size="sm"
//     />
//   </>
// )

// const inputWithPad = () => (
//   <>
//     <Input
//       style={{width: '300px'}}
//       defaultValue="prepend text"
//       prepend="https://"
//     />
//     <Input
//       style={{width: '300px'}}
//       defaultValue="google"
//       append=".com"
//     />
//   </>
// )
