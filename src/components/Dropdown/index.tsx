import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function Dropdown({data}) {
  return (
    <Autocomplete
      isRequired
      label="Favorite Animal"
      defaultItems={data}
      placeholder="Search an animal"
      defaultSelectedKey="cat"
      className="max-w-xs"
    >
      {(item) => <AutocompleteItem key={item?.value}>{item?.label}</AutocompleteItem>}
    </Autocomplete>
  );
}
